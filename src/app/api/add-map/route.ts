import { sql } from "@vercel/postgres";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    //user_id heatmap_id heatmap_name color total_mins type

    const { searchParams } = new URL(request.url)
    try {
        await sql`INSERT INTO heatmap_data (user_id, heatmap_id, heatmap_name, color, total_mins, type) VALUES ('conordmcdevitt@gmail.com', 1,'Excercise', '#0000FF', 0, 'time');`
    } catch (error) {
        return NextResponse.json({error}, {status: 500})
    }

    const heatmapData = await sql`SELECT * FROM heatmap_data`
    return NextResponse.json({heatmapData}, {status: 200})
}