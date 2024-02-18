import { useState, useEffect } from 'react'
import './cart.css'
import { db } from "../config/firebase"
import { getDocs, collection, addDoc } from "firebase/firestore"

import React from 'react'
import ReactDOM from 'react-dom/client'
import './cart.css'

function Cart() {
  const [count, setCount] = useState(0)
  return(
    <>
      <p>
          Cart Page
      </p>
    </>
  )
}

export default Cart

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Cart />
    </React.StrictMode>,
)
