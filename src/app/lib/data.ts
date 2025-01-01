import { sql } from "@vercel/postgres";
import { HeatmapData, CellData, CellStats } from "./definitions";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

export async function fetchHeatmapData() {
  //get user's email
  const session = await getServerSession(options);

  try {
    //this has to be based on user though
    //I think you can just use session provider here.
    const data =
      await sql<HeatmapData>`SELECT *, EXTRACT(EPOCH FROM start_date) AS start_date
      FROM heatmap_data 
      WHERE email=${session?.user?.email}`;

    //why is start_date being turned into number 
    const rows: any = data.rows.map((row) => ({
      ...row,
      start_date: new Date((row.start_date as number) * 1000),
    }));
    //rows should be array of heatmapData objs
    //I want data.rows to be type heatmapData
    //want to return array of obj
    
    // console.log("heatmap rows", rows);
    return rows
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

  try {
    const data = await sql<CellData>`
      SELECT *
      FROM cell_data
      WHERE heatmap_id=${heatmapID} AND email=${userID}
      ORDER BY date
      `;
    return data.rows;
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
    SELECT SDTEVP(time_mins) AS stdDev, AVG(time_mins) as mean, SUM(time_mins) as total_time
    FROM cell_data
    WHERE heatmap_id=${heatmapID} AND email=${userID}`;

    return data.rows;
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
