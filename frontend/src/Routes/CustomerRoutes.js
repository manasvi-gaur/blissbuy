
import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomePage from '../Pages/HomePage'
import Product from '../components/Product/Product'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import Checkout from '../components/Checkout/Checkout'
import RefundPolicy from '../Pages/RefundPolicy'
import ReturnPolicy from '../Pages/ReturnPolicy'
import PrivacyPolicy from '../Pages/PrivacyPolicy'
import TermsOfService from '../Pages/TermsOfService'
import Contactus from '../Pages/Contactus'

export default function CustomerRoutes() {
  return (
    <div>
        <div>
            <Header/>
        </div>

        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>} ></Route>
            <Route path='/product/:id' element={<ProductDetails/>} ></Route>
            <Route path='/checkout' element={<Checkout/>} ></Route>
            <Route path='/policy/refundpolicy' element={<RefundPolicy/>} ></Route>
            <Route path='/policy/returnpolicy' element={<ReturnPolicy/>} ></Route>
            <Route path='/policy/privacypolicy' element={<PrivacyPolicy/>} ></Route>
            <Route path='/policy/termsService' element={<TermsOfService/>} ></Route>
            <Route path='/contactus' element={<Contactus/>} ></Route>
        </Routes>
        <div>
            <Footer/>
        </div>
      
    </div>
    )
}
