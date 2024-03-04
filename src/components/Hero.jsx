import React from 'react'
import ReactDOM from 'react-dom/client'
import "./Hero.css"


import { useState } from 'react'

function Hero(props) {
  
  return(
    <>
    <div className={props.className}>
        <img alt= "heroImage" src={props.heroImg}/>

        <div className="hero-text">
            <h1 className='h1-text'>{props.title}</h1>
            <p className='body-text'>{props.text}</p>
        </div>
    </div> 
    </>
  )
}

export default Hero;