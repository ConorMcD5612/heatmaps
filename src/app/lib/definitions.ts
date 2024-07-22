export type User = {
    email: string;
}

export type HeatmapData = {
    email: string;
    heatmapID: string;
    name: string;
    color: string;
    totalMins: number;
    type: 'time' | 'count' ;

}

export type Cell = {
    //these might not be numbers when I created the table
    cellID: number;
    heatmapID: number;
    mins: number;
    count: number;
    
}