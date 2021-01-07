const express = require("express");

const router = express.Router();

const Store = require('../models/store');
const Product = require('../models/product');
const createSplitTransaction = require('../services/pagarme').createSplitTransaction;


router.get('/stores', async(req, res) => {
     
    try{
        const stores = await Store.find();
        res.json({error: false, stores })
    }catch(err){
        res.json({ error: true, message: err.message})
    }
})


router.get('/store/:id', async (req, res) => {
     
    try{
        const store = await Store.findById(req.params.id);
        let products = await Product.find({
             store_id: store._id
        }).populate('store_id', 'recipient_id')
          
        res.json({ error: false, store: { ...store._doc, products} })
    }catch(err){
        res.json({ error: true, message: err.message})
    }
})


router.post('/purchase', async (req, res) => {
    try{
         const transaction = await createSplitTransaction(req.body);
         res.json(transaction);
    }catch(err){
        res.json({ error: true, message: err.message})
    }
})

module.exports = router;