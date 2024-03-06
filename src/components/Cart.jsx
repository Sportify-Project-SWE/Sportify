import React from 'react'
import ReactDOM from 'react-dom/client'

import { useState } from 'react'
function Cart() {
  const [count, setCount] = useState(0)
  return(
    <div className='content'>
        <p>
            cart Page
        </p>
    </div>
  )
}

export default Cart