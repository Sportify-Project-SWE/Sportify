import { auth } from "../../config/firebase"
import { onAuthStateChanged,createUserWithEmailAndPassword } from "firebase/auth"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Register = () => {
   
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("")

    const [user, setUser] = useState({});
    const [isSignedIn, setIsSignedIn] = useState(false)
    
    const[error, setError] = useState("")

    const navigate = useNavigate();

    useEffect( () => {
        if (isSignedIn){
            navigate("/profile/")
        } 
    }, [isSignedIn, navigate])

    onAuthStateChanged( auth, (currentUser) => { 
        setUser(currentUser)
        if (currentUser){
            setIsSignedIn(true)
        } else{
            setIsSignedIn(false)
        }
        
    } );
    

    const createAccount = async () => {
        if (registerPassword !== registerConfirmPassword) {
          setError("Passwords do not match.");
          return;
        }
        
        try {
          await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        } catch (error) {
          setError(error.message);
        }
      };

    return (
        <div className="login-container">
            <div className='container2'>
            
                <div className="input-container">
                    <input 
                        placeholder="Email..."
                        type="text"
                        value={registerEmail}
                        onChange={ (e) => setRegisterEmail(e.target.value) }
                    />
                </div>

                
                
                <br></br>
                <div className="input-container">
                    <input 
                        placeholder="Password..."
                        type="password"
                        value={registerPassword}
                        onChange={ (e) => setRegisterPassword(e.target.value) }
                    />
                </div>

                <div className="input-container">
                    <input 
                        placeholder="Confirm Password..."
                        type="password"
                        value={registerConfirmPassword}
                        onChange={ (e) => setRegisterConfirmPassword(e.target.value) }
                    />
                </div>

                <br></br>
                <br></br>
                <button onClick={createAccount}> Create Account </button>
                {error && <div className="error-message">{error}</div>}
                
            
            </div>   
        </div>
    )
}

export default Register

