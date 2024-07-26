import { sql } from "@vercel/postgres";
import { HeatmapData } from "./definitions";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

export async function fetchHeatmapData() {
  //get user's email
  const session = await getServerSession(options);
  console.log(session, "this is session");
  try {
    //this has to be based on user though
    //I think you can just use session provider here.
    const data =
      await sql<HeatmapData>`SELECT * FROM heatmap_data WHERE user_id=${session?.user?.email}`;
    console.log(data.rows, "data");
    return data.rows;
  } catch (error) {
    throw new Error("Failed to fetch heatmap data");
  }
}
