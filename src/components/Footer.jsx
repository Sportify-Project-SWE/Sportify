import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './Footer.css'
import {faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return (
        <div className="footerContainer">
            <div className="socialIcons">
                <FontAwesomeIcon icon={faInstagramSquare} size="lg" style={{color:'#ffffff',}}/>
            </div>
        </div>
    )
}