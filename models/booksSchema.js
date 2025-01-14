const mongoose=require('mongoose');

const bookUser=new mongoose.Schema({
  bookId:{
    type:Number,
    unique:true,
    required:true
  },
  bookName:{
    type:String,
    required:true
  },
  issueDate:{
    type:Date,
    required:true
  },
  endDate:{
    type:Date,
    required:true
  }
  ,
  registration:{
    type:Date,
    default:Date.now
  }
});
module.exports=mongoose.model('bookdb',bookUser);