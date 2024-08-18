// have it make cells based on heatmap startDate 
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    //
    try {
        await sql`INSERT INTO cell_data `
    } catch (error) {

    }
}