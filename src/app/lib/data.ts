import { sql } from "@vercel/postgres";
import {
  HeatmapData,
  CellData,
  CellStats,
  HeatmapParsed,
  CellDataParsed,
} from "./definitions";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { DateTime } from "luxon";

export async function fetchHeatmapData() {
  //get user's email
  const session = await getServerSession(options);

  try {
    const data = await sql<HeatmapData>`SELECT *
      FROM heatmap_data 
      WHERE email=${session?.user?.email}
      ORDER BY start_date DESC, heatmap_id ASC`;

    //SQl to luxon dateTime
    const rows: any = data.rows.map(
      (row): HeatmapParsed => ({
        ...row,
        start_date: DateTime.fromJSDate(row.start_date),
        last_updated: DateTime.fromJSDate(row.last_updated),
      })
    );

    console.log(rows, "rows");
    return rows;
  } catch (error) {
    console.error("Failed to fetch heatmap data:", error);
    throw new Error("Failed to fetch heatmap data");
  }
}

//going to call this on possibly thousands of cells.

export async function fetchCellData(heatmapID: number) {
  //going to need type of heatmap later
  const session = await getServerSession(options);
  const userID = session?.user?.email;

  type RawRow = {
    heatmap_id: number;
    time_mins: number;
    count: number;
    date: Date;
  };

  try {
    const data = await sql<RawRow>`
      SELECT *
      FROM cell_data
      WHERE heatmap_id=${heatmapID} AND email=${userID}
      ORDER BY date
      `;

    //date should just be a string then make luxon date when needed.
    //comes in as Js date
    const rows: CellData[] = data.rows.map((row) => {
      const isoDate = DateTime.fromJSDate(row.date).toISODate();
      if (!isoDate) throw new Error("Invalid date found in cell data");

      return {
        heatmap_id: row.heatmap_id,
        time_mins: row.time_mins,
        count: row.count,
        date: isoDate,
      };
    });

    return rows;
  } catch (e) {
    console.error("fetchCellData failed", e);
    throw new Error("Failed to fetch cellData");
  }
}

export async function fetchMinsAverage(heatmapID: number) {
  const session = await getServerSession(options);
  const userID = session?.user?.email;

  try {
    const data = await sql`
    SELECT AVG(time_mins)
    FROM cell_data
    WHERE heatmap_id=${heatmapID} and email=${userID}`;

    return data.rows;
  } catch (e) {
    console.error("fetchTimeAverage failed");
    throw new Error("Failed to fetch average");
  }
}

//gets standard deviation and mean
export async function fetchCellStats(heatmapID: number) {
  const session = await getServerSession(options);
  const userID = session?.user?.email;

  try {
    const data = await sql<CellStats>`
    SELECT STDDEV(time_mins) AS std_dev, AVG(time_mins) as mean, SUM(time_mins) as total_time
    FROM cell_data
    WHERE heatmap_id=${heatmapID} AND email=${userID}`;

    return data.rows[0];
  } catch (e) {
    console.error("fetch stats failed failed");
    throw new Error("Failed to fetch stats");
  }
}

//sum all mins for a heatmap
export async function fetchTotalTime(heatmapID: number) {
  const session = await getServerSession(options);
  const userID = session?.user?.email;

  try {
    const data = await sql`SELECT SUM(time_mins) as sum_time
    FROM cell_data
    WHERE heatmap_id=${heatmapID} and email=${userID}`;

    return data.rows[0];
  } catch (e) {
    console.error("time mins sum fetch failed");
    throw new Error("failed to fetch sum of time mins");
  }
}
