import { auth, googleAuthProvider } from "../config/firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { useState } from "react"

import React from 'react'
import ReactDOM from 'react-dom/client'
import './login.css'

//note: auth?.currentUser.email will print email of current user 


export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try{
            //wait for firebase to authenticate user credentials
            await signInWithEmailAndPassword( auth, email, password )
            window.location.href = "../product";
        } catch (err) {
            console.err(err)
        }
    };

    const createAccount = async () => {
        try{
            //wait for firebase to authenticate user credentials
            await createUserWithEmailAndPassword( auth, email, password )
            window.location.href = "../product";
        } catch (err) {
            console.err(err)
        }
    };

    const signInWithGoogle = async () => {
        try{
            //wait for firebase to authenticate user credentials
            await signInWithPopup( auth, googleAuthProvider )
            window.location.href = "./product";
        } catch (err) {
            console.err(err)
        }
    
    }

    const logOut = async () => {
        try{
            await signOut(auth)
        } catch (err){
            console.error(err)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <p>
                Sign in using email/password
                <a href="../product/">test linke to product</a>
                <br></br>
                <input 
                    placeholder="Email..."
                    onChange={ (e) => setEmail(e.target.value) }
                />
                
                <br></br>
                <input 
                    placeholder="Password..."
                    type="password"
                    onChange={ (e) => setPassword(e.target.value) }
                />

                <br></br>
                <button onClick={signIn}> Sign In</button>
                
                <br></br>
                <button onClick={createAccount}> Create Account</button>
                
                <br></br>
                <button onClick={signInWithGoogle}> Sign In With Google </button>
                
                <br></br>
                <button onClick={logOut}> Sign Out </button>
            </p>
            
                
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Auth />
    </React.StrictMode>,
)


