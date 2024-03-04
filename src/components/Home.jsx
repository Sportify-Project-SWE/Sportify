import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from '../components/Hero'
import Marquee from '../components/BrandSlider'
import HeroImg from "../assets/ff.jpg"
import './Home.css'
import './BrandSliderStyle.css'
import './Hero.css'



import { useState } from 'react'


function Home() {
 
  return(
    <>
    <Hero
    className="hero"
    heroImg= {HeroImg}
    title="Train Hard"
    text="Save big"
    />
    <Marquee />

    
   
    
    </>
    
  )
}

export default Home
