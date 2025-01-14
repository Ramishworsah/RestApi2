const  mongoose=require('mongoose');
require('dotenv').config();

const url=process.env.DATABASE_URL
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(url);
        console.log(`the database is connected : ${conn.connection.host}`);
    }
    catch(err){
        console.log(err.message);
    }
}
module.exports=connectDB;