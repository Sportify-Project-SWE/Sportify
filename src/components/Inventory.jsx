import { useState, useEffect } from 'react'

import { db } from "../config/firebase"
import { getDocs, collection, addDoc } from "firebase/firestore"

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


function Inventory() {
  const [count, setCount] = useState(0)

  const [productList, setProductList] = useState([])
  
  const productsCollectionRef = collection(db, "products")

  //new product states
  const [newProductName, setNewProductName] = useState("")
  const [newProductPrice, setNewProductPrice] = useState(0)
 
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
  }, [])

  const onSubmitProduct = async() => {
    try{
      await addDoc( productsCollectionRef, {
        name: newProductName, 
        price: newProductPrice,
      })

      getProductList() //basically getting the new product list every time a new product is created
    } catch(err){
      console.error(err)
    }
  }

  return (
    
    <>
      <div className="App">
        <div>
          <input 
            placholder="Product Name..."
            onChange={ (e) => setNewProductName(e.target.value)}
          />
          <input 
            placeholder="Product Price..." 
            type="number"
            onChange={ (e) => setNewProductPrice(Number(e.target.value))}
          />
          <button onClick={ onSubmitProduct }> Submit Product </button>
        </div>

        <div>
          {productList.map( (product) => (
            <div>
              <p> Product Name: {product.name}</p>
            </div>
          ))}
        </div>
      </div> 

    </>
  )
}

export default Inventory

