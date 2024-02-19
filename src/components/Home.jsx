import React from 'react'
import ReactDOM from 'react-dom/client'

import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)
  return(
    <>
        <div>
            HomePage
        </div>
    </>
  )
}

export default Home
