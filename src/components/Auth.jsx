import { auth, googleAuthProvider } from "../config/firebase"
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


export const Auth = () => {
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    
    const [user, setUser] = useState({})
    const [isSignedIn, setIsSignedIn] = useState(false)
    const [signInFailure, setSignInFailure] = useState(false)

    const navigate = useNavigate();

    useEffect( () => {
        if (isSignedIn){
            navigate("/profile")
        } 
    }, [isSignedIn, navigate])

    useEffect( () => {
        if (signInFailure){
            return( '')
        } 
    }, [signInFailure])



    onAuthStateChanged( auth, (currentUser) => { 
        setUser(currentUser)
    } );
    
    const signIn = async () => {
        try{
            //wait for firebase to authenticate user credentials
            await signInWithEmailAndPassword( auth, loginEmail, loginPassword )
            setIsSignedIn(true)
            setLoginEmail('');
            setLoginPassword('');
        } catch (e) {
            if (e instanceof FirebaseAuthInvalidCredentialsException) {
                notifyUser("Invalid password");
            } else if (e instanceof FirebaseAuthInvalidUserException) {
                notifyUser("Incorrect email address");
            } else {
                notifyUser(e.getLocalizedDescription());
            }
        }
    };


    

    const createAccount = async () => {
        try{
            //wait for firebase to authenticate user credentials
            await createUserWithEmailAndPassword( auth, registerEmail, registerPassword )
            setIsSignedIn(true)
            setRegisterEmail('');
            setRegisterPassword('');
        } catch (err) {
            console.error(err)
        }
    };

    const signInWithGoogle = async () => {
        try{
            //wait for firebase to authenticate user credentials
            await signInWithPopup( auth, googleAuthProvider )
            setIsSignedIn(true)

        } catch (err) {
            console.error(err)
        }
    
    }

    const logOut = async () => {
        try{
            await signOut(auth)
            setIsSignedOut(true)
        } catch (err){
            console.error(err)
        }
    }

    return (
        <div classname='login-container'>
            <h1>Login</h1>
            <p>
                Sign in using email/password
                
                <br></br>
                <input 
                    placeholder="Email..."
                    type="text"
                    value={loginEmail}
                    onChange={ (e) => setLoginEmail(e.target.value) }
                />
                
                <br></br>
                <input 
                    placeholder="Password..."
                    type="password"
                    value={loginPassword}
                    onChange={ (e) => setLoginPassword(e.target.value) }
                />

                <br></br>
                <button onClick={signIn}> Sign In </button>
                
                <br></br>
                or

                <br></br>
                <input 
                    placeholder="Email..."
                    type="text"
                    value={registerEmail}
                    onChange={ (e) => setRegisterEmail(e.target.value) }
                />
                
                <br></br>
                <input 
                    placeholder="Password..."
                    value={registerPassword}
                    type="password"
                    onChange={ (e) => setRegisterPassword(e.target.value) }
                />

                <br></br>
                <button onClick={createAccount}> Create Account</button>
                
                <br></br>
                or
                <br></br>
                <button onClick={signInWithGoogle}> Sign In With Google </button>
            </p>   
            
                
        </div>
    )
}

export default Auth

