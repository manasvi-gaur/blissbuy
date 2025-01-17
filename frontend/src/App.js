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
import { useEffect } from 'react';
import { getLoginStatusFromCookies } from './Utils/helper/auth';
import { login, logout } from './redux/slices/authSlice';
import { useGetCartQuery } from './redux/api/cart.api';
import { useSelector } from 'react-redux';

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
