import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroselData } from './MainCaroselData';



const items = MainCaroselData.map((item)=> <img  className='cursor-pointer' src={item.img} role='presentation' />)

const MainCarosel = () => (
    <AliceCarousel
    autoPlay
    autoPlayStrategy="none"
    autoPlayInterval={1000}
    animationDuration={1000}
    animationType="fadeout"
    infinite
    touchTracking={false}
    disableDotsControls
    disableButtonsControls
    items={items}
        
    />
);

export default MainCarosel;