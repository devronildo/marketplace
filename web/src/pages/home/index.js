import {useEffect}  from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestShops} from '../../store/modules/shop/actions'

import './styles.css';
import Header from '../../components/header';
import Loja from '../../components/loja';
import Map from '../../components/map';


const Home = () => {

     const dispatch = useDispatch();
     const {shops} = useSelector((state) => state.shop)

     useEffect(() => {
       dispatch(requestShops());
     },[])

     return (
         <div className="h-100">
              <Header />

              <div className="container-fluid loja-list-container">

                   <div className="col-12 px-4  text-center">
                            <h5>Mais próximo de você (4)</h5>
                   </div>
                   <ul className="col-12 loja-list">
                        {shops.map((p) => 
                         <Loja shop={p} />
                        )}
                   </ul>

              </div>
              <Map shops={shops} />
         </div>
     )
}

export default Home;