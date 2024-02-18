import { useState } from 'react'
import './App.css'
import { Auth } from './component/auth.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Auth />
      </div> 

    </>
  )
}

export default App
