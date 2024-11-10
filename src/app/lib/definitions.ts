export type User = {
    user_id: string;
}

export type HeatmapData = {
    user_id: string;
    heatmap_id: string;
    heatmap_name: string;
    color: string;
    total_mins: number;
    type: 'time' | 'count' ;
    start_date: Date | number

}

export type CellData = {
    //these might not be numbers when I created the table
    cell_id: number;
    heatmap_id: number;
    time_mins: number;
    count: number;
}