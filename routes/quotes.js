const express = require('express')
const router = express.Router()
const quotesController = require('../controllers/quotes') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, quotesController.getQuotes)

router.post('/createQuote', quotesController.createQuote)

router.put('/markFavourite', quotesController.markFavourite)

router.put('/unfavourite', quotesController.unfavourite) 

router.delete('/deleteQuote', quotesController.deleteQuote)

module.exports = router