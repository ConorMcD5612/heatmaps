export function dateToYYYYMMDD(date: Date): string {
  let formattedDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  return formattedDate;
}

export function calculateOpacity(
  dataPt: number,
  mean: number,
  stdDev: number
): number {

  if (dataPt === 0 || stdDev === 0) {
    return 0;
  }
  

  const zScoreHash = {
    lowQuartile: -0.674, //25th percentile
    midQuartile: -0, //50th
    highQuartile: 0.674,  //75
  };

  // Calculate z-score
  const zScore = (dataPt - mean) / stdDev;
  console.log("zScore", zScore)
  // Determine opacity based on z-score
  if (zScore < zScoreHash["lowQuartile"]) {
    console.log("lowQuart")
    return 0.2;
  } else if (zScore < zScoreHash["midQuartile"]) {
    console.log("medQuart")
    return 0.5;
  } else if (zScore < zScoreHash["highQuartile"]) {
    console.log("highQuart")
    return 0.8;
  } else {
    return 1;
  }
}


export function hrMins(totalMins: number): {hrs: number, mins: number} {
  const hrs = Math.floor(totalMins/60) 
  const mins = totalMins % 60
  return {hrs, mins}
}