import { DateTime } from "luxon";

export type User = {
  user_id: string;
};

export type HeatmapData = {
  email: string;
  heatmap_id: number;
  heatmap_name: string;
  color: string;
  total_mins: number;
  type: "Time" | "Count";
  unit: string;
  //this might be string
  inverse: boolean;

  //comes in as a js date from SQL db
  start_date: Date;
  last_updated: Date;
};

//TODO: fix duplicating types parsing with ZOD
export type HeatmapParsed = {
  email: string;
  heatmap_id: number;
  heatmap_name: string;
  color: string;
  total_mins: number;
  type: "Time" | "Count" | "Binary";
  unit: string;
  inverse: boolean;

  start_date: DateTime;
  last_updated: DateTime;
};

export type CellData = {
  heatmap_id: number;
  time_mins: number;
  count: number;
  date: string;
};

export type CellDataParsed = {
  heatmap_id: number;
  time_mins: number;
  count: number;
  date: string;
};

export type CellStats = {
  mean: number;
  std_dev: number;
  total_time: number;
};

export type HeatmapType = "Time" | "Count" | "Binary";

export const colors = {
  pink: "#FF4F9A",
  green: "#39FF14",
  blue: "#00FFFF",
  yellow: "#FFFF33",
  purple: "#9D00FF",
  orange: "#FFA500",
};
