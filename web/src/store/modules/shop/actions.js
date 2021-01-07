import types from './types';

export function setCustomer(customer){
    return { 
        type: types.SET_CUSTOMER, customer 
    }    
}

export function requestShops(customer){
    return { 
        type: types.REQUEST_SHOPS 
    }    
}

export function setShops(shops){
    return { 
        type: types.SET_SHOPS, shops
    }    
}


export function setShopMapSelected(shop){
    return { 
        type: types.SET_SHOP_MAP_SELECTED, shop
    }    
}

export function setMapCenter(location){
    return { 
        type: types.SET_MAP_CENTER, location
    }    
}

export function requestShop(id){
    return { 
        type: types.REQUEST_SHOP, id
    }    
}

export function setShop(shop){
    return { 
        type: types.SET_SHOP, shop  
    }    
}

export function toggleCartProduct(product){
    return { 
        type: types.TOGGLE_CART_PRODUCT, product  
    }    
}

export function setTransaction(transaction){
    return { 
        type: types.SET_TRANSACTION, transaction  
    }    
}
export function makePruchase(){
    return { 
        type: types.MAKE_PURCHASE
    }    
}