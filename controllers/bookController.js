const user=require('../models/booksSchema');

const createUser= async (req, res) => {
    const { bookId, bookName, issueDate, endDate } = req.body;

    // Validate input
    if (!bookId || !bookName || !issueDate || !endDate) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    try {
        // Assuming user is the model you're working with, which may need to be renamed to 'book' or a similar name
        const newBook = await user.create({
            bookId: bookId,
            bookName: bookName,
            issueDate: issueDate,
            endDate: endDate
        });

        return res.status(201).json({
            success: true,
            message: "Book created successfully",
            data: newBook
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "An error occurred while creating the book",
            error: error.message
        });
    }
}
const showAll=async(req,res)=>{
    try{
    const allData=await user.find();
    return res.status(200).json({
        success:true,
        data:allData
    });
    }
    catch(err){
        return res.status(403).json({
            success: false,
            message: error.message
        }) ;

    }
}
const getBooksById=async(req,res)=>{
    try{
        const {bookId:id}=req.params;
        const singleBooks=await user.findOne({bookId:id})
       if(singleBooks){
        return res.status(200).json({
            success:true,
            data:singleBooks
        })

       }
       else{
        return res.status(404).json({
            success:false,
            message:`the given id of the book ${id} is nor exist`
        }) ;

          }
    }
    catch(err){
        return res.status(403).json({
            success: false,
            message: error.message
        }) ;
    }
}
const deleteBooks=async(req,res)=>{
    try{
        const {bookId:id}=req.params;

      const deletedBooks=await user.findOneAndDelete({bookId:id})
      if(deletedBooks){
        return res.status(200).json({
            success:true,
            message:`the book with id ${id} is deleted`
        })
      }
      else{
        return res.status(404).json({
            success:false,
            message:`the given id of the book ${id} is nor exist`
        })
      }
    }
    catch(err){
        return res.status(403).json({
            success: false,
            message: error.message
        }) ;
    }
}
const updateBooks=async(req,res)=>{
    try{
        const {bookId:id}=req.params;
        const {bookName,issueDate,endDate}=req.body;    
        const updatedBooks=await user.findOneAndUpdate({bookId:id},{bookName:bookName,issueDate:issueDate,endDate:endDate }) ;
        if(updatedBooks){
            return res.status(200).json({
                success:true,
                message:"update book successfully"
            })
        }
        else{
            return res.status(404).json({
                success:false,
                
            })
        }
    }
    catch(err){
        return res.status(403).json({
            success: false,
            message: error.message
        }) ;
    }
}

module.exports={createUser,showAll,getBooksById,deleteBooks,updateBooks};