import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    
    //drop table in console
//     const result = await sql`
//     CREATE TABLE IF NOT EXISTS heatmap_data (
//     email VARCHAR(255),
//     heatmap_id SERIAL PRIMARY KEY,
//     heatmap_name VARCHAR(255),
//     total_mins INT,
//     color VARCHAR(255),
//     type VARCHAR(255),
//     start_date DATE
// );
//   `
  const result = await sql`
  CREATE TABLE IF NOT EXISTS cell_data (
    email VARCHAR(255),
    heatmap_id INT,
    cell_id INT, 
    time_mins INT,
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
