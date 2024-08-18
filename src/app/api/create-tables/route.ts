import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    
    const result = await sql`
    CREATE TABLE IF NOT EXISTS cell_data (
      cell_id VARCHAR(255),
      heatmap_id VARCHAR(255),
      time_mins FLOAT,
      count INT,
      date DATE
    );
  `
  console.log("Table creation result:", result)
     
     return NextResponse.json({result}, {status: 200})
   
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  
}
