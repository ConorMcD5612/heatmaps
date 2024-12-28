
export default function dateToYYYYMMDD(date: Date): string {
    let formattedDate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+ date.getDate()
    return formattedDate
  }