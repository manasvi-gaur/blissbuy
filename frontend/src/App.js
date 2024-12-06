import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import Header from './components/Header';
import HomePage from './Pages/HomePage';
import Footer  from './components/Footer';
import Product from './components/Product/Product';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import CustomerRoutes from './Routes/CustomerRoutes';

function App() {
  return (
    <div >
    
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>
    
    </div>
    
  );
}

export default App;
