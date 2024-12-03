"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Heatmap from "../components/Heatmap";


export async function createCell(heatmapID: number, index: number, day: any) {
  //this seems bad becausae u could be doing 1000+ await checks to see if cell exists everytime
  //Could possibily everytime you edit cell, create cell in table
  //ill just do this for now
  //FIXME: CAUSING LAG?
  const session = await getServerSession(options);
  const userID = session?.user?.email

  try {
    const result =
      await sql`SELECT 1 FROM cell_data WHERE heatmap_id=${heatmapID} AND cell_id=${index} AND email=${userID}`;
    if (result.rowCount === 0) {
      await sql`INSERT INTO cell_data 
            (email, cell_id, heatmap_id, time_mins, count, date)
            VALUES 
            (${index}, ${heatmapID}, '0', '0', ${day})`;
    }
  } catch (e) {
    console.error("createCell Failed", e);
  }
}

const MeasureSchema = z.enum(["Count", "Time"])
//can add messages
//for hrs and mins do gt than 0 validation then return if validation fails
const FormSchema = z.object({
  hours: z.coerce
    .number(),
  mins: z.coerce
    .number(),
  heatmapName: z.coerce.string(),
  color: z.coerce.string().length(7),
  type: MeasureSchema,
});

const UpdateCell = FormSchema.omit({heatmapName: true, color: true, type: true});

//YOU NEED TO HAVE USER ID AS WELL 
//TODO: Add email
export async function updateCell(
  cellID: string | null,
  heatmapID: string | null,
  formData: FormData
) {
  //zod to validate type
  const { hours, mins } = UpdateCell.parse({
    hours: formData.get("hrs"),
    mins: formData.get("mins"),
  });

  if (!cellID || !heatmapID) {
    console.error("cellID/HeatmapID null in updateCell");
    return
  }

  const numCellID = Number(cellID) 
  const numHeatmapID = Number(heatmapID)
  const totalMins = hours * 60 + mins;

  const session = await getServerSession(options);
  const userID = session?.user?.email
 
  
  try {
    
    const result = await sql`UPDATE cell_data 
        SET time_mins = time_mins + ${totalMins}
        WHERE cell_id = ${cellID} AND heatmap_id = ${heatmapID} AND email=${userID};`;
        
  } catch (e) {
    console.error("updateCell error", e);
  }
 

  //dont know what this does
  redirect('/dashboard')
}

const CreateHeatmap = FormSchema.omit({hours: true, mins: true})


export async function createHeatmap(formData: FormData) {

  const {color, type, heatmapName} = CreateHeatmap.parse({
    color: formData.get("color"),
    type: formData.get("type"),
    heatmapName: formData.get("heatmapName")
  })

  const totalMins = 0
  const startDate: any = new Date();

  const session = await getServerSession(options);
  const userID = session?.user?.email

  try {
    //dont think I need seperate for mins and count 
    const result = await sql`INSERT INTO heatmap_data
    (email, heatmap_name, color, total_mins, type, start_date)
    VALUES (${userID}, ${heatmapName}, ${color}, ${totalMins}, ${type}, ${startDate} )`
  } catch (e) {
    console.error("createHeatmap Error")
  }

}

export async function deleteCells(heatmapID: number) {
  const session = await getServerSession(options);
  const userID = session?.user?.email

  try {
    const result = await sql`DELETE FROM cell_data WHERE email=${userID} AND heatmap_id=${heatmapID}`
  } catch (e) {
   console.error("delete cells failed", e)
   }
}

export async function deleteHeatmap(heatmapID: number) {
  const session = await getServerSession(options);
  const userID = session?.user?.email

  try {
    const result = await sql`DELETE FROM heatmap_data WHERE email=${userID} AND heatmap_id=${heatmapID}`
    await deleteCells(heatmapID)
  } catch (e) {
    console.error("Failed to delete heatmap", e)
  }
 
}

export async function updateHeatmap(formData: FormData, heatmapID: number) {
  
}

