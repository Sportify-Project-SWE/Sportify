import { auth, googleAuthProvider } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { useState } from "react"

//note: auth?.currentUser.email will print email of current user 

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try{
            //wait for firebase to authenticate user credentials
            await createUserWithEmailAndPassword( auth, email, password )
        } catch (err) {
            console.err(err)
        }
    };

    const signInWithGoogle = async () => {
        try{
            //wait for firebase to authenticate user credentials
            await signInWithPopup( auth, googleAuthProvider )
        } catch (err) {
            console.err(err)
        }
    
    }

    const signOut = async () => {
        try{
            await signOut(auth)
        } catch (err){
            console.error(err)
        }
    }

    return (
        <div>
            <input 
                placeholder="Email..."
                onChange={ (e) => setEmail(e.target.value) }
            />
            <input 
                placeholder="Password..."
                type="password"
                onChange={ (e) => setPassword(e.target.value) }
            />
            <button onClick={signIn}> Sign In</button>

            <button onClick={signInWithGoogle}> Sign In With Google </button>

            <button onClick={signOut}> Sign Out </button>
        </div>
    )
}

