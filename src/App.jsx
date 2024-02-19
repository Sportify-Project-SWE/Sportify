import { useState} from 'react'

import './App.css'

import Home from './components/Home'
import Catalog from './components/Catalog'
import Auth from './components/Auth'
import Inventory from './components/Inventory'
import NavBar from './components/NavBar'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/store" element={<Catalog />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes> 
    </div>
  )
}

export default App
