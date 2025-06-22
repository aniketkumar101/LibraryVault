const express = require('express');
const router = express.Router();


const CartDetails = require('../controllers/CartDetails.controller');


router.post('/',CartDetails.addToCart);
router.get('/:email',CartDetails.getCart)
router.delete('/:id',CartDetails.deletecart);
router.delete('/bookid/:bookId',CartDetails.deletecartbybookid)


module.exports = router;