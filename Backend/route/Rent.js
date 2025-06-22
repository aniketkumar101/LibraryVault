const express = require('express');
const router = express.Router();

const RentDetails = require('../controllers/RentDetails.controller');

router.post('/', RentDetails.addbookuser);
router.put('/', RentDetails.findbookuser);

module.exports = router;