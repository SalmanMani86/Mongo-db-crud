const dbConnect = require("./mongodb");
const insert=async ()=>{
    const db = await dbConnect();
    const result=await db.insertMany(
        [
            {name:"Samsung2", brand:"Apple",category:"Mobile"},
            {name:"Samsung3", brand:"Apple",category:"Mobile"},

        ]
    )
    if(result.acknowledged){
        console.log("Data is inserted");
    }
}
 

insert(); 