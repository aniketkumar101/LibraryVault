const express = require('express')
const router = express.Router()

const LibraryController = require('../controllers/LibraryDetails.controller')

router.post('/', LibraryController.addLibrary)
router.get('/', LibraryController.allLibrary)
router.get('/:id',LibraryController.getlibraryById)
router.post('/:id',LibraryController.updateLibraryAvailability)

module.exports = router