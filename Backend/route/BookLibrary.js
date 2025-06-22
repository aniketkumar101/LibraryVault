const express = require('express')
const router = express.Router()

const LibraryBooking = require('../controllers/BookLibrary.controller')

router.post('/',LibraryBooking.addDetails)
router.get('/:email',LibraryBooking.getDetails)
router.put('/:id',LibraryBooking.updateExpire)

module.exports = router
