import React from 'react'
import ReactDOM from 'react-dom/client'
import Marquee from './BrandSlider.jsx'
import Card from './Cards.jsx'
import './Home.css'


function Home() {
 
  return(
    <div className='content' >
      <div className='home-container'>
        <div className="hero">
          <h1>Train Hard</h1>
          <h2>Save Big</h2>
        </div> 
        <Card />
        <Marquee />
      </div>
    </div>
    
  )
}

export default Home
