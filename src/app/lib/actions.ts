"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { Result } from "postcss";
import { CellData, CellDataParsed } from "./definitions";
import { DateTime, Interval } from "luxon";
import { cellsToAdd } from "./utils";



//called on heatmap render, adds cell if new day.
export async function addCell(heatmapID: number, lastUpdated: DateTime) {
  const todayStart = DateTime.now().startOf("day").toISO();

  const session = await getServerSession(options);
  const userID = session?.user?.email;

  const cellData = cellsToAdd(heatmapID, lastUpdated);
  if (cellData.length === 0) return;

  //make a cell in DB for each dayBetween lastUpdated and today
  try {
    const cellsToInsert = cellData.map(
      (
        cell
      ) => sql`INSERT INTO cell_data (email, heatmap_id, time_mins, count, date)
    VALUES (${userID}, ${cell.heatmap_id}, 0,0, ${cell.date.toISO()})`
    );

    await sql`UPDATE heatmap_data SET last_updated = ${todayStart} WHERE heatmap_id=${heatmapID} and email=${userID}`;
    
    await Promise.all(cellsToInsert);
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

// date comes in as a string as updateCell componenet gets it from the URL
export async function updateCell(
  heatmapID: string | null,
  date: string,
  formData: FormData
) {
  //zod to validate type
  const { hours, mins } = UpdateCell.parse({
    hours: formData.get("hrs"),
    mins: formData.get("mins"),
  });

  const totalMins = hours * 60 + mins;

  const session = await getServerSession(options);
  const userID = session?.user?.email;

  console.log("this is data time whne updating");

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

  let dt = DateTime.now();

  //make last updated the day before so a cell will be created
  let dayBefore = dt.minus({ day: 1 }).toISO();

  try {
    const result = await sql`INSERT INTO heatmap_data
    (email, heatmap_name, color, total_mins, type, start_date, last_updated)
    VALUES (${userID}, ${heatmapName}, ${color}, ${totalMins}, ${type}, ${dt.toISO()}, ${dayBefore})`;
  } catch (e) {
    console.error("createHeatmap Error");
    throw new Error("createheatmap Erorr");
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
});

export async function updateHeatmap(heatmapID: number, formData: FormData) {
  const session = await getServerSession(options);
  const userID = session?.user?.email;

  const { color, heatmapName } = UpdateHeatmap.parse({
    color: formData.get("color"),
    heatmapName: formData.get("name"),
  });
  console.log(heatmapName, "heatmapName");
  try {
    const result =
      await sql`UPDATE heatmap_data SET color = ${color}, heatmap_name = ${heatmapName} WHERE heatmap_id=${heatmapID} AND email=${userID}`;
  } catch (e) {
    console.error("updateHeatmap failed", e);
  }

  redirect("/dashboard");
}
