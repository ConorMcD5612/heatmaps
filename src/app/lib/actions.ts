import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from 'next/navigation';
imort {ZCOOL_KuaiLe}




export async function createCell(heatmapID: number, index: number, day: any){

    //this seems bad becausae u could be doing 1000+ await checks to see if cell exists everytime 
    //Could possibily everytime you edit cell, create cell in table 
    //ill just do this for now 
    try{
        const result = await sql`SELECT 1 FROM cell_data WHERE heatmap_id=${heatmapID} AND cell_id=${index}`
        console.log(heatmapID, index, day)
        if (result.rowCount === 0){
            await sql`INSERT INTO cell_data 
            (cell_id, heatmap_id, time_mins, count, date)
            VALUES 
            (${index}, ${heatmapID}, '0', '0', ${day})`
            console.log("created cell in cell_data")
        }
    } catch (error) {
        console.log("createCell Failed", error)
    }
}   

//you can't update a column without having created it first. 
// export async function updateCell(heatmapID: string, index: number, day: Date)
//What do I need to update. Need cellID and heatmapID 

const FormSchema = z.object({
    heatmapID: z.string()
})
export async function updateCell(cellID: string | null, heatmapID: string | null, formData: FormData){
    //how am I getting formData its not passed 
    //its just not calling 
    //maybe this is why you use zod so you can change the types? 
    const hours = formData.get('hrs')
    const mins = formData.get('mins')

   
    console.log(typeof(hours))
    //const totalMins: = hours * 60 + mins
    console.log(formData.get('hrs'), cellID, heatmapID)
    console.log("called")
    //this should really never be null though? 
    //add mins to time 
    // try {
    //     await sql`UPDATE cell_data 
    //     SET `
    // } catch(e) {

    // }

    //dont know what this does
    // revalidatePath('/dashboard');
    redirect('/dashboard');
}