import { DateTime } from "luxon";

export type User = {
    user_id: string;
}


export type HeatmapData = {
    email: string;
    heatmap_id: number;
    heatmap_name: string;
    color: string;
    total_mins: number;
    type: 'time' | 'count';

    //comes in as a js date from SQL db
    start_date: Date
    last_updated: Date
}

export type HeatmapParsed = {
    email: string;
    heatmap_id: number;
    heatmap_name: string;
    color: string;
    total_mins: number;
    type: 'time' | 'count';

    start_date: DateTime,
    last_updated: DateTime
}

export type CellData = {
    heatmap_id: number;
    time_mins: number;
    count: number;
    date: Date;
}

export type CellDataParsed = {
    heatmap_id: number;
    time_mins: number;
    count: number;
    date: DateTime
}

export type CellStats = {
    mean: number;
    std_dev: number;
    total_time: number;
}