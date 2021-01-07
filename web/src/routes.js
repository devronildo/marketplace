import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/global.css';

import Sidebar from './components/sidebar';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Loja from './pages/loja';
import Home from './pages/home';

const Routes = () => {
   return (
      <> 
       <Router>
            <Route path="/" exact component={Home} />
            <Route path="/loja/:id" exact component={Loja} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/cadastro" exact component={Cadastro} />
            <Sidebar />
       </Router>    
      
      </>  
   )
}

export default Routes;