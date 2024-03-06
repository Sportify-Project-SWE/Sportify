import React from 'react'
import ReactDOM from 'react-dom/client'
import Marquee from './BrandSlider.jsx'
import HeroImg from "../../assets/ff.jpg"
import Card from './Cards.jsx'
import './BrandSliderStyle.css'



import { useState } from 'react'


function Home() {
 
  return(
    <>
    <>
    <div className="hero">
        <img alt= "heroImage" src={HeroImg}/>

        <div className="hero-text">
            <h1 className='h1-text'>Train Hard</h1>
            <p className='body-text'>Save Big</p>
        </div>
    </div> 
    </>

    <Marquee />
    <Card />
    </>
    
  )
}

export default Home
