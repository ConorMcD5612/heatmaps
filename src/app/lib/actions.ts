"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { Result } from "postcss";
import {dateToYYYYMMDD} from "./utils";
import { CellData } from "./definitions";

//called on heatmap render, adds cell if new day.
export async function addCell(heatmapID: number, lastUpdated: Date) {
  const nowDate = new Date();
  const currentDate = dateToYYYYMMDD(nowDate);
  const lastFormatted = dateToYYYYMMDD(lastUpdated);

  if (currentDate == lastFormatted) return;

  const session = await getServerSession(options);
  const userID = session?.user?.email;

  //calc days between lastUpdated and today
  const diffTime = nowDate.getTime() - lastUpdated.getTime();
  const daysBetween = Math.floor(diffTime / (1000 * 3600 * 24));

  let cellData: CellData[] = [];
  for (let i = 1; i <= daysBetween; i++) {
    //to get date for cell add i days to lastUpdated
    const newDate = new Date(lastUpdated);
    newDate.setDate(newDate.getDate() + i);

    const cell: CellData = {
      heatmap_id: heatmapID,
      time_mins: 0,
      count: 0,
      date: dateToYYYYMMDD(newDate),
    };

    cellData.push(cell);
  }

  //make a cell in DB for each dayBetween lastUpdated and today
  try {
    const cellsToInsert = cellData.map(
      (
        cell
      ) => sql`INSERT INTO cell_data (email, heatmap_id, time_mins, count, date)
    VALUES (${userID}, ${cell.heatmap_id}, 0,0, ${cell.date as string})`
    )

    const result = await sql`UPDATE heatmap_data SET last_updated = ${currentDate} WHERE heatmap_id=${heatmapID} and email=${userID}`.then(async (result) => {
      await Promise.all(cellsToInsert)
      console.log(`added ${cellsToInsert.length} cells`);
    })
    
   
  } catch (e) {
    console.error("addCell failed", e);
  }
}

const MeasureSchema = z.enum(["Count", "Time"]);
//can add messages
//for hrs and mins do gt than 0 validation then return if validation fails
const FormSchema = z.object({
  hours: z.coerce.number(),
  mins: z.coerce.number(),
  heatmapName: z.coerce.string(),
  color: z.coerce.string().length(7),
  type: MeasureSchema,
});

const UpdateCell = FormSchema.omit({
  heatmapName: true,
  color: true,
  type: true,
});

//YOU NEED TO HAVE USER ID AS WELL
//TODO: Add email
export async function updateCell(
  heatmapID: string | null,
  date: string | null,
  formData: FormData
) {
  //zod to validate type
  console.log(formData)
  const { hours, mins } = UpdateCell.parse({
    hours: formData.get("hrs"),
    mins: formData.get("mins"),
  });
  console.log(date, "this is date")
  const totalMins = hours * 60 + mins;

  const session = await getServerSession(options);
  const userID = session?.user?.email;

  try {
    const result = await sql`UPDATE cell_data 
        SET time_mins = time_mins + ${totalMins}
        WHERE date=${date} AND heatmap_id=${heatmapID} AND email=${userID};`;
  } catch (e) {
    console.error("updateCell error", e);
  }


  redirect("/dashboard");
}

const CreateHeatmap = FormSchema.omit({ hours: true, mins: true });

export async function createHeatmap(formData: FormData) {
  const session = await getServerSession(options);
  const userID = session?.user?.email;

  const { color, type, heatmapName } = CreateHeatmap.parse({
    color: formData.get("color"),
    type: formData.get("type"),
    heatmapName: formData.get("heatmapName"),
  });

  const totalMins = 0;
  const startDate: any = new Date();

  //to addCell when map created 
  let dayBefore: any = new Date()
  dayBefore.setDate(dayBefore.getDate() - 1)

 
  try {
    const result = await sql`INSERT INTO heatmap_data
    (email, heatmap_name, color, total_mins, type, start_date, last_updated)
    VALUES (${userID}, ${heatmapName}, ${color}, ${totalMins}, ${type}, ${startDate}, ${dayBefore})`;

  } catch (e) {
    console.error("createHeatmap Error");
    throw new Error("createheatmap Erorr")
  }
}

export async function deleteCells(heatmapID: number) {
  const session = await getServerSession(options);
  const userID = session?.user?.email;

  try {
    const result =
      await sql`DELETE FROM cell_data WHERE email=${userID} AND heatmap_id=${heatmapID}`;
  } catch (e) {
    console.error("delete cells failed", e);
  }
}

export async function deleteHeatmap(heatmapID: number) {
  const session = await getServerSession(options);
  const userID = session?.user?.email;

  try {
    const result =
      await sql`DELETE FROM heatmap_data WHERE email=${userID} AND heatmap_id=${heatmapID}`;
      await deleteCells(heatmapID);
  } catch (e) {
    console.error("Failed to delete heatmap", e);
  }
}


const UpdateHeatmap = FormSchema.omit({
  hours: true,
  mins: true,
  type: true,
})

export async function updateHeatmap(heatmapID: number, formData: FormData) {
  const session = await getServerSession(options);
  const userID = session?.user?.email;

  
  const { color, heatmapName } = UpdateHeatmap.parse({
    color: formData.get("color"),
    heatmapName: formData.get("name"),
  }); 
  console.log(heatmapName, "heatmapName")
  try {
    const result = await sql`UPDATE heatmap_data SET color = ${color}, heatmap_name = ${heatmapName} WHERE heatmap_id=${heatmapID} AND email=${userID}`;
  } catch (e) {
    console.error("updateHeatmap failed", e);
  }

  redirect("/dashboard");
}
