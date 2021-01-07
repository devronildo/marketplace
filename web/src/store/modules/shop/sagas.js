import {takeLatest, all, call, put, select} from 'redux-saga/effects';
import types from './types';
import api from '../../../services/api';
import Swal from 'sweetalert2';
import {setShops, setShop} from './actions';

export function* requestShops(){
   const response = yield call(api.get, '/stores');
   const res = response.data;

   yield put(setShops(res.stores));  
}
 
export function* requestShop(payload){
   const response = yield call(api.get, `/store/${payload.id}`);
   const res = response.data;

   yield put(setShop(res.store));  
}
 
export function* makePurchase() {
   const { transaction } = yield select(state => state.shop)
   const response = yield call(api.post, `/purchase`, transaction)
   const res = response.data;

   if(res.error){
      Swal.fire({
         icon: 'error',
         title: 'Oopss..',
         text: res.message 
      })

      return false;
   }

   if(res.data.status !== 'paid'){
      Swal.fire({
         icon: 'error',
         title: 'Oopss..',
         text: res.data.refuse_reason 
      })

      return false;
   }

   Swal.fire({
      icon: 'success',
      title: 'Tudo certo.',
      text: 'Sua compra foi aprovada com sucesso.'
   })

   return false;


}

export default all([
   takeLatest(types.REQUEST_SHOPS, requestShops),
   takeLatest(types.REQUEST_SHOP, requestShop),
   takeLatest(types.MAKE_PURCHASE, makePurchase),
 ])

