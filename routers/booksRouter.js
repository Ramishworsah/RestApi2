const express =require('express');
const router=express.Router();
 
const db=require('../controllers/bookController');

router.post('/createUser',db.createUser);
router.get('/getBooks',db.showAll);
router.get('/getBooks/:bookId',db.getBooksById);
router.delete('/deleteBooks/:bookId',db.deleteBooks);
router.put('/updateBooks/:bookId',db.updateBooks);


module.exports=router;