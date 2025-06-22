const express = require('express');
const router = express.Router();

const BooksDetailscontroller = require('../controllers/BooksDetails.controller');

router.post('/', BooksDetailscontroller.addBooks);

router.get('/',BooksDetailscontroller.allBooks);

router.get('/:bookId',BooksDetailscontroller.getBooksbyid)

router.put('/:bookId/decreasestock', BooksDetailscontroller.decreaseBooks);

router.put('/:bookId/increasestock', BooksDetailscontroller.increaseBooks);

module.exports = router;


