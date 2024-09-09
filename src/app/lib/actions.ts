"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createCell(heatmapID: number, index: number, day: any) {
  //this seems bad becausae u could be doing 1000+ await checks to see if cell exists everytime
  //Could possibily everytime you edit cell, create cell in table
  //ill just do this for now
  try {
    const result =
      await sql`SELECT 1 FROM cell_data WHERE heatmap_id=${heatmapID} AND cell_id=${index}`;
    if (result.rowCount === 0) {
      await sql`INSERT INTO cell_data 
            (cell_id, heatmap_id, time_mins, count, date)
            VALUES 
            (${index}, ${heatmapID}, '0', '0', ${day})`;
    }
  } catch (e) {
    console.error("createCell Failed", e);
  }
}

//you can't update a column without having created it first.
// export async function updateCell(heatmapID: string, index: number, day: Date)
//What do I need to update. Need cellID and heatmapID

const FormSchema = z.object({
  hours: z.coerce
    .number(),
    
  mins: z.coerce
    .number()
});

const UpdateCell = FormSchema;

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

  console.log(numCellID, numHeatmapID, "IDS");

  const totalMins = hours * 60 + mins;
 

  console.log("hours", hours, "mins", mins, "totalMins", totalMins);
  //add mins to time
  //the problem is cellID and heatmapID
  console.log(`UPDATE cell_data SET time_mins = time_mins + ${totalMins} WHERE cell_id = ${numCellID} AND heatmap_id = ${numHeatmapID};`);
  console.log(`UPDATE cell_data SET time_mins = time_mins + ${totalMins} WHERE cell_id = ${1} AND heatmap_id = ${5};`);
  
  try {
    console.log("IDSADSA", numCellID, numHeatmapID)
    const result = await sql`UPDATE cell_data 
        SET time_mins = time_mins + ${totalMins}
        WHERE cell_id = ${cellID} AND heatmap_id = ${heatmapID};`;
        console.log(result)
  } catch (e) {
    console.error("updateCell error", e);
  }
 

  //dont know what this does
  redirect('/dashboard')
}


