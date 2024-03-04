import { auth, googleAuthProvider } from "../../config/firebase"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import "./styles.css"

export const Auth = () => {
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const [isSignedIn, setIsSignedIn] = useState(false)

    const [error, setError] = useState("")
    const [createAccount, setCreateAccount] = useState(false)
    
    const navigate = useNavigate();

    useEffect( () => {
        if (isSignedIn){
            navigate("/profile/")
        } 
    }, [isSignedIn, navigate])

    useEffect( () => {
        if (createAccount){
            navigate("/register/")
        } 
    }, [createAccount, navigate])


    const signIn = async () => {
        try{
            //wait for firebase to authenticate user credentials
            await signInWithEmailAndPassword( auth, loginEmail, loginPassword )
            setIsSignedIn(true)
        } catch (error) {
            setError(error.message)
        } finally {
            setLoginEmail('');
            setLoginPassword('');
        }
    };



    const signInWithGoogle = async () => {
        try{
            //wait for firebase to authenticate user credentials
            await signInWithPopup( auth, googleAuthProvider )
            setIsSignedIn(true)

        } catch (err) {
            setError(error.message)
        } 
    
    }

    return (
        <div className='login-container'>
            <h1>Login</h1>

            <h2> Sign in using email/password </h2>
                
            <div>
                <input 
                    placeholder="Email..."
                    type="text"
                    value={loginEmail}
                    onChange={ (e) => setLoginEmail(e.target.value) }
                />
            </div>

            <div>
                <input 
                    placeholder="Password..."
                    type="password"
                    value={loginPassword}
                    onChange={ (e) => setLoginPassword(e.target.value) }
                />
            </div>
            
            <div>
                <button onClick={signIn}> Sign In </button>
            </div>

            <div>
                {error && <div className="error-message">{error}</div>}
            </div>

            <h3>or</h3>

            <div>
                <button onClick={() => setCreateAccount(true)}> Create Account</button>
            </div>

            <h2>or</h2>
            
            <div>
                <button onClick={signInWithGoogle}> Sign In With Google </button>
            </div>
            
                
        </div>
    )
}

export default Auth

