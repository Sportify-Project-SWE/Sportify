import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'


function NavBar(){
    const [isSignedIn, setIsSignedIn] = useState(false)
    const [dropdownOn, setDropdownOn] = useState(false)

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
            <img src="../../src/assets/logo.svg" alt="Sportify Logo" height={25} width={25} />
            <h1>SPORTIFY</h1>
            <input placeholder="Search"></input>
            <ul>
                <Link to="/">Home  </Link>
                <Link to="/store">Shop  </Link>
                
                <div className="dropdown">
                    <button onClick={toggleDropdown}>Account</button>
                    { dropdownOn &&
                        <ul id="accountDropdownList">
                            <a href="/inventory">Inventory  </a>
                            {isSignedIn ? (<a href="/profile">Profile  </a> ) 
                                : ( <a href="/login">Login  </a> ) }
                        </ul> }
                </div>
                
                <Link to="/cart">Cart  </Link>
                
            </ul>
        </nav>
    )
}

export default NavBar