const database=require('./mongodb');
const deleteData=async ()=>{
    const data=await database();
    let result=await data.deleteOne({name:'Huawei Samsung'});
    console.warn(result);
    if(result.acknowledged){
        console.log("Record Deleted");
    }
}
deleteData();