import React from 'react'
import ReactDOM from 'react-dom/client'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const [count, setCount] = useState(0)
    const [isSignedOut, setIsSignedOut] = useState(false)
    const [user, setUser] = useState({})
    const navigate = useNavigate();

    onAuthStateChanged( auth, (currentUser) => { 
        setUser(currentUser)
        if (!currentUser){
            setIsSignedOut(true)
        }
        
    } );

    useEffect( (signedOut) => {
        if (isSignedOut){
            navigate("/login")
        } 
    }, [isSignedOut, navigate])

    const logOut = async () => {
        try{
            await signOut(auth)
        } catch (err){
            console.error(err)
        }
    }

  return(
    <>
        <p>
            <h4>User logged in:</h4>
                {user?.email}

            <br></br>
            <button onClick={logOut}> Sign Out </button>
        </p>
        
    </>
  )
}

export default Profile