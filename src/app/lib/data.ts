import { sql } from "@vercel/postgres";
import { HeatmapData, CellData } from "./definitions";
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
      WHERE user_id=${session?.user?.email}`;

    //change start date to js date 
    const rows: any = data.rows.map((row) => ({
      ...row,
      start_date: new Date(row.start_date as number * 1000),
    }));

    return rows;
  } catch (error) {
    console.error("Failed to fetch heatmap data:", error);
    throw new Error("Failed to fetch heatmap data");
  }
}

//going to call this on possibly thousands of cells. 

export async function fetchCellData(heatmapID: number, cellID: number) {
  //going to need type of heatmap later 
    try {
      const data = await sql<CellData>`
      SELECT *
      FROM cell_data
      WHERE heatmap_id=${heatmapID} AND cell_id=${cellID}
      `
      
      return data.rows
    } catch (e) {
      console.error("fetchCellData failed", e)
      throw new Error("Failed to fetch cellData")
    }
}


export async function fetchMinsAverage(heatmapID: number) {
  try {
    const data = await sql`
    SELECT AVG(time_mins)
    FROM cell_data
    WHERE heatmap_id=${heatmapID}`
   

    return data.rows
  } catch (e) {
    console.error("fetchTimeAverage failed")
    throw new Error("Failed to fetch average")
  }
}

//max, min for cell color
export async function fetchMinMax(heatmapID: number) {
  try { 
    const data = await sql`
    SELECT MIN(time_mins) as min_time, MAX(time_mins) as max_time
    FROM cell_data
    WHERE heatmap_id=${heatmapID}`

  
    return data.rows[0]
  } catch (e) {
    console.error("fetchMaxMin failed")
    throw new Error("Failed to fetch min max")
  }
}