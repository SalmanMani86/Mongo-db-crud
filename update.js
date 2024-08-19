const dbConnect=require('./mongodb');
const update=async()=>{
    let data=await dbConnect();
    let result=await data.updateOne(
        {brand:'Huawei'},
            {
                    $set:{name:'Huawei Samsung'}
            }
    );
    console.warn(result);
}
update();