import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    
    
    const result = await sql`
    CREATE TABLE IF NOT EXISTS heatmap_data (
      user_id VARCHAR(255),
      heatmap_id SERIAL PRIMARY KEY,
      heatmap_name VARCHAR(255),
      total_mins INT,
      color VARCHAR(255),
      type VARCHAR(255),
      start_date DATE
    );
  `
  console.log("Table creation result:", result)
     
     return NextResponse.json({result}, {status: 200})
   
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  
}
