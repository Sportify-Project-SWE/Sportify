import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'


function NavBar(){
    const [isSignedIn, setIsSignedIn] = useState("")

    onAuthStateChanged( auth, (currentUser) => { 
        if (currentUser){
            setIsSignedIn(true)
        } else{
            setIsSignedIn(false)
        }
        
    } );


    return(
        
        <ul>

            <Link to="/">Home  </Link>
            <Link to="/store">Shop  </Link>
            <Link to="/inventory">Manage Inventory  </Link>
            <Link to="/cart">Cart  </Link>
            {isSignedIn ? (<Link to="/profile">Profile  </Link> ) 
                : ( <Link to="/login">Login  </Link> ) }

        </ul>
    )
}

export default NavBar