import React from "react"
import Marquee from 'react-fast-marquee'
import Nike from "../assets/Nike.webp"
import Adidas from "../assets/adidas.jpg"
import Everlast from "../assets/Everlast.png"
import Wilson from "../assets/Wilson.jpg"
import './BrandSliderStyle.css'



//left off at calling AutoPlay on home page

function AutoPlay() {
    const settings= {
        gradient: false,
        speed: 90
        
        
    };
    return(
        <div className="slider-container">
            <div className="title">
                <h1>Our Brands</h1>
            </div>

            <div>
            <Marquee {...settings}>
                <div className="brand-logo">
                    <img src={Nike} alt=""/>
                </div>
                <div className="brand-logo">
                    <img src={Adidas} alt="" />
                </div>
                <div className="brand-logo">
                    <img src={Everlast} alt=""/>
                </div>
                <div className="brand-logo">
                    <img src={Wilson} alt=""/>
                </div>
            </Marquee>
        </div>
    </div>
    
    );
}

export default AutoPlay;