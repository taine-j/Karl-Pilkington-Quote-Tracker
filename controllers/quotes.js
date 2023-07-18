const Quote = require('../models/Quote')

module.exports = {
    getQuotes: async (req,res)=>{
        console.log(req.user)
        try{
            const quoteItems = await Quote.find({userId:req.user.id})
            const itemsTotal = await Quote.countDocuments({userId:req.user.id})
            res.render('quotes.ejs', {quotes: quoteItems, total: itemsTotal, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createQuote: async (req, res)=>{
        try{
            await Quote.create({quote: req.body.quoteItem, favourite: false, userId: req.user.id})
            console.log('Quote has been added!')
            res.redirect('/quotes')
        }catch(err){
            console.log(err)
        }
    },
    markFavourite: async (req, res)=>{
        try{
            await Quote.findOneAndUpdate({_id:req.body.quoteIdFromJSFile},{
                favourite: true
            })
            console.log('Marked Favourite')
            res.json('Marked Favourite')
        }catch(err){
            console.log(err)
        }
    },
     unfavourite: async (req, res)=>{
        try{
            await Quote.findOneAndUpdate({_id:req.body.quoteIdFromJSFile},{
                favourite: false
            })
            console.log('Unfavourited')
            res.json('Unfavourited')
        }catch(err){
            console.log(err)
        }
    }, 
    deleteQuote: async (req, res)=>{
        console.log(req.body.quoteIdFromJSFile)
        try{
            await Quote.findOneAndDelete({_id:req.body.quoteIdFromJSFile})
            console.log('Deleted Quote')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    