import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import logo from "../../../src/assets/logo.svg";
import home from "../../../src/assets/home.svg"


import "./NavBar.css"

function NavBar(){
    const [isSignedIn, setIsSignedIn] = useState(false)
    const [dropdownOn, setDropdownOn] = useState(false)

    //Triggered when the user changes (login or sign out)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setIsSignedIn(currentUser ? true : false);
        });
        return () => unsubscribe();
    }, []); 


    const toggleDropdown = () => {
        setDropdownOn(!dropdownOn)
    };
    

    return(
        <nav>
            <img src={logo} alt="Sportify Logo" height={25} width={25} />
            <h1>SPORTIFY</h1>
            <input placeholder="Search"></input>
            <ul>
                <a href="/" className="nav-link" >
                    <img src={home} alt="Home" height={10} width={10} />
                </a>
                <a href="/store/" className="nav-link">Shop  </a>
                <a href="/cart/" className="nav-link">Cart  </a>
                
                <div className="dropdown">
                    <button onClick={toggleDropdown}>Account</button>
                    { dropdownOn &&
                        <ul id="accountDropdownList">
                            <a href="/inventory/" className="nav-link">Inventory  </a>
                            {isSignedIn ? (<a href="/profile/" className="nav-link">Profile  </a> ) 
                                : ( <a href="/login/" className="nav-link">Login  </a> ) }
                        </ul> }
                </div>
                
                
                
            </ul>
        </nav>
    )
}

export default NavBar