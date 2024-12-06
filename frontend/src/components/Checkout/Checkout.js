import React from 'react'
import DeliveryAddForm from './DeliveryAddForm'
import OrderSummary from './OrderSummary'
import { Box } from '@mui/material'

export default function 
() {
  return (
    <div style={{backgroundColor:"white"}}>
        <h1 style={{backgroundColor:"bisque" ,textAlign:"center", fontFamily:"Helvetica-BoldOblique",fontSize:"9vmin",color:"#414143",paddingTop:"3vmin",paddingBottom:"1vmin"}}>|| BLISS ||</h1>
        {/* <div className="border-b border-gray-900/10 pb-12"></div> */}
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-1 gap-y-2 px4 pt-3 mt-3'>
        
        <div  className="flex flex-col items-center ">
            <DeliveryAddForm/>
        </div>
        <div style={{backgroundColor:"bisque" ,marginLeft:"2rem",marginRight:"2rem",borderTopLeftRadius:"3rem",borderBottomLeftRadius:"3rem",borderTopRightRadius:"3rem",borderBottomRightRadius:"3rem"}} className=" mb-3 lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8
        lg:pb-24">
            <OrderSummary/>
        </div>
        </section>
        
    </div>
  )
}
