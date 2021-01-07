const Store = require('../models/Store')
const Product  = require('../models/product')
const stores = require('./store.json');
const createRecipients = require('../services/pagarme').createRecipient;


//database

require('../database')

const addStoreAndProducts = async () => {
      try{
        
         for(let store of stores){

            const recipient = await createRecipients(store.nome);

             if(!recipient.error) {
                const newStore = await new Store({...store, recipient_id: recipient.data.id, }).save();
                await Product.insertMany
                     (store.produtos.map((p) => ({ ...p, store_id: newStore._id }))
                );
             }else{
                  console.log(recipient.message);
             }
            
             

         }

         console.log('Final do Script'); 

      }catch(err){
         console.log(err.message);
      }
}

addStoreAndProducts();