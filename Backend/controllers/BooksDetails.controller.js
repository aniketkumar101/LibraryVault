const BooksDetails = require('../model/BooksDetails.model');

const addBooks = async (req,res)=>{
    try{
        const newBooks = new BooksDetails(req.body)
        const savedBooks = await newBooks.save()
        res.json(savedBooks)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const allBooks = async (req,res)=>{
    try{
        const books = await BooksDetails.find()
        res.json(books)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const getBooksbyid = async (req,res)=>{
    try{
        const { bookId } = req.params;
        const book = await BooksDetails.findOne({bookId: bookId})
        if(!book){
            return res.status(404).json({
                message: 'Book not found'
            })
        }
        res.json(book)
    }
    catch(err){
        res.status(500).json(err)
    }
}

const decreaseBooks = async (req,res)=>{
    try{
        console.log('Decreasing books')
        const { bookId } = req.params;
        const { quantity } = req.body;

        const book = await BooksDetails.findOne({bookId: bookId});

        if(!book){
            return res.status(404).json({
                message: 'Book not found'
            })
        }

        if(book.stock < quantity){
            return res.status(400).json({
                message: 'Not enough stock'
            })
        }

        book.stock = book.stock - quantity;
        await book.save();
        
        res.json({message: 'Book decrease successful',book})
    }
    catch(err){
        res.status(500).json(err)
    }
}

const increaseBooks = async (req,res)=>{
    try{
        const { bookId } = req.params;
        const { quantity } = req.body;

        const book = await BooksDetails.findOne({bookId: bookId});
        
        if(!book){
            return res.status(404).json({
                message: 'Book not found'
            })
        }
        book.stock = book.stock + quantity;
        await book.save();
        res.json({message: 'Book increase successful',book})
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    addBooks,
    allBooks,
    getBooksbyid,
    decreaseBooks,
    increaseBooks,
}
