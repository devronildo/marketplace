const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const product = new Schema({
     store_id:  {
        type: Schema.Types.ObjectId,
        ref: 'Store'   
     },
     nome: String,
     capa: String,
     preco: Number,
     avaliacoes: Number
})

module.exports = mongoose.model('Product', product);