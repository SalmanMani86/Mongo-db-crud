const dbConnect=require("./mongodb");
const main=async ()=>{
    let data = await dbConnect();
  //  data = await data.find({name:"Iphone"}).toArray();
    data = await data.find().toArray();
    console.warn(data);
}

main();