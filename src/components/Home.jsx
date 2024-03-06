import React from 'react'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import ReactDOM from 'react-dom/client'
import Hero from '../components/Hero'
import Marquee from '../components/BrandSlider'
import Footer from './Footer'
import HeroImg from "../assets/sport.png"
import Card from '../components/Cards'

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
    <Card />
    

    <Footer />
    
    
    

    
   
    
    </>
    
  )
}

export default Home;
library.add(fab)
