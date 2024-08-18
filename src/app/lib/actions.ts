import { sql } from "@vercel/postgres"
export async function createCell(heatmapID: number, index: number, day: any){

    //this seems bad becausae u could be doing 1000+ await checks to see if cell exists everytime 
    //Could possibily everytime you edit cell, create cell in table 
    //ill just do this for now 
    try{
        const result = await sql`SELECT 1 FROM cell_data WHERE heatmap_id=${heatmapID} AND cell_id=${index}`
        console.log(result)
        if (result.rowCount === 0){
            await sql`INSERT INTO cell_data (heatmap_id, cell_id, time_mins, count, date)
            VALUES (${heatmapID}, ${index}, '0', '0', ${day})`
            console.log("created cell in cell_data")
        }
    } catch (error) {
        console.log("createCell Failed", error)
    }
}   

//you can't update a column without having created it first. 
// export async function updateCell(heatmapID: string, index: number, day: Date)