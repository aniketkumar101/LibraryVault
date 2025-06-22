const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const BooksDetails = require('./route/BooksDetails')
const User = require('./route/Users')
const RentDetails = require('./route/Rent')
const Cart = require('./route/Cart')
const Library = require('./route/Library')
const BookLibrary = require('./route/BookLibrary')
const dbconnect = require('./db/db');


dbconnect()

const app = express();
app.use(cors());
const port = 5000

app.use(bodyParser.json());

app.use('/books',BooksDetails);
app.use('/users',User);
app.use('/rent',RentDetails);
app.use('/cart',Cart);
app.use('/library',Library);
app.use('/booklibrary',BookLibrary);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
