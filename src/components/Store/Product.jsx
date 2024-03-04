import React from 'react'
import ReactDOM from 'react-dom/client'

import { useState } from 'react'
import "./styles.css"

function Product({product}) {
  const [count, setCount] = useState(0)
  
  return(
    <>
        <div className="product-container">
          <button>
            <p> {product.name} </p>
            <p> price: {product.price} </p> 
          </button>
        </div>
    </>
  )
}

export default Product
