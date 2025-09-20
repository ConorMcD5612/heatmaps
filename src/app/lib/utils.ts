import { CellDataParsed } from "./definitions";
import { DateTime, Interval } from "luxon";

export function calculateOpacity(
  dataPt: number,
  mean: number,
  stdDev: number,
  inverse: boolean
): number {
  if (dataPt === 0 && !inverse) {
    return 0;
  }

  if(dataPt === 0 && inverse) {
    return 1;
  }

  const zScoreHash = {
    lowQuartile: -0.674, //25th percentile
    midQuartile: -0, //50th
    highQuartile: 0.674, //75
  };

  // Calculate z-score
  const zScore = (dataPt - mean) / stdDev;
  let opacity = 0;

  // Determine opacity based on z-score
  if (zScore < zScoreHash["lowQuartile"]) {
    
    opacity = 0.2;
  } else if (zScore < zScoreHash["midQuartile"]) {
    
    opacity = 0.5;
  } else if (zScore < zScoreHash["highQuartile"]) {
    
    opacity = 0.8;
  } else {
    opacity = 1;
  }

  if (inverse) {
    opacity = 1 - opacity
  }
  return opacity;
}

export function hrMins(totalMins: number): { hrs: number; mins: number } {
  const hrs = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  return { hrs, mins };
}

//helper function to get cells between lastUpdated and today
export function cellsToAdd(
  heatmapID: number,
  lastUpdated: DateTime
): CellDataParsed[] {
  const todayStart = DateTime.now().startOf("day");
  const lastUpdatedStart = lastUpdated.startOf("day");

  //calc days between lastUpdated and today
  const daysBetween = Interval.fromDateTimes(
    lastUpdatedStart,
    todayStart
  ).count("days");

  const daysToAdd = Math.max(0, Math.floor(daysBetween));

  let cellData: CellDataParsed[] = [];

  for (let i = 1; i <= daysToAdd; i++) {
    const currentDay = lastUpdated.plus({ days: i });

    const cell: CellDataParsed = {
      heatmap_id: heatmapID,
      time_mins: 0,
      count: 0,
      date: currentDay.toISODate() as string,
    };

    cellData.push(cell);
  }
  return cellData;
}
