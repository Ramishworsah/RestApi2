const express=require('express');
const db=require('./dbconfig/bookdb');
// const user=require('./models/booksSchema');
require('dotenv').config();
const  user =require('./routers/booksRouter');
const app=express();
const port=process.env.PORT || 5050;
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"congratulations everyone!"
    });
});
app.use('/api/',user);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
db();