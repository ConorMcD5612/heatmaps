import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE users_table (user_id varchar(255), pic varchar(255), name varchar(255));`;
      await sql`CREATE TABLE heatmap_data (user_id varchar(255), heatmap_id varchar(255), heatmap_name varchar(255), color varchar(255), total_mins float, type varchar(255));`
      await sql`CREATE TABLE cell_data (cell_id varchar(255), heatmap_id varchar(255), time_mins float, count int);`
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
