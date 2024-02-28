import React from 'react'
import ReactDOM from 'react-dom/client'

import { useState, useEffect } from 'react'

import { db } from "../config/firebase"
import { getDocs, collection, addDoc } from "firebase/firestore"


import { BrowserRouter } from 'react-router-dom'


function Catalog() {
  const [count, setCount] = useState(0)

  const [productList, setProductList] = useState([])
  
  const productsCollectionRef = collection(db, "products")

  const getProductList = async () => {
        try{
          const data = await getDocs( productsCollectionRef )
          const filteredData = data.docs.map( (doc) => ({
            ...doc.data(), 
            id: doc.id,
          }))
          setProductList(filteredData)
        } catch (err){
          console.error(err)
        }

      }

  useEffect( () => {
    getProductList();
  }, [productsCollectionRef])

  return(
    <>
        <p>
            Product Page
        </p>
    </>
  )
}

export default Catalog
