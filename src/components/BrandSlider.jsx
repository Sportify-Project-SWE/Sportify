import React from "react"
import Marquee from 'react-fast-marquee'
import Nike from "../assets/Nike.webp"
import Adidas from "../assets/adidas.jpg"
import Everlast from "../assets/Everlast.png"
import Wilson from "../assets/Wilson.jpg"
import Reebok from '../assets/Reebok.webp'
import Puma from '../assets/Puma.jpg'
import UA from '../assets/ua.jpg'
import NB from '../assets/nb.png'
import './BrandSliderStyle.css'



//left off at calling AutoPlay on home page

function AutoPlay() {
    const settings= {
        gradient: false,
        speed: 100,  
        loop: 0,   
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
                <div className="brand-logo">
                    <img src={Reebok} alt=""/>
                </div>  
                <div className="brand-logo">
                    <img src={Puma} alt=""/>
                </div> 
                <div className="brand-logo">
                    <img src={UA} style={{width:"300px"}} alt=""/>
                </div> 
                <div className="brand-logo">
                    <img src={NB} alt="" style={{width:"250px"}}/>
                </div> 
            </Marquee>
        </div>
    </div>
    
    );
}

export default AutoPlay;