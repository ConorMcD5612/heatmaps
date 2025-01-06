export type User = {
    user_id: string;
}

export type HeatmapData = {
    email: string;
    heatmap_id: number;
    heatmap_name: string;
    color: string;
    total_mins: number;
    type: 'time' | 'count' ;
    start_date: Date | number
    last_updated: Date
}

export type CellData = {
    //these might not be numbers when I created the table
    heatmap_id: number;
    time_mins: number;
    count: number;
    date: Date | string;
}

export type CellStats = {
    mean: number;
    std_dev: number;
    total_time: number;
}