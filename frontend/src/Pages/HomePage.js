import React from 'react'
import MainCarosel from '../components/HomeElements/MainCarosel'
import ShopCollectionSection from '../components/HomeElements/ShopCollectionSection'
import EndSeasonSaleSec from '../components/HomeElements/EndSeasonSaleSec'
import PromoSection from '../components/HomeElements/PromoSection'

export default function HomePage() {
  return (
    <div>
        <MainCarosel/>
        <ShopCollectionSection/>
        <h1 style={{textAlign:"center", fontSize:"5vmin", fontFamily:"Cera Stencil Pro,Montserrat,sans-serif",color:"#000"}}>END OF SEASON SALE | NOW LIVE</h1>
        <EndSeasonSaleSec/>
        <PromoSection/>
    </div>
  )
}
