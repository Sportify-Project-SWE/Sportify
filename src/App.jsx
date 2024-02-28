import { useState} from 'react'

import './App.css'

import Home from './components/Home'
import Catalog from './components/Store/Catalog'
import Auth from './components/Auth'
import Inventory from './components/Inventory'
import Profile from './components/Profile'
import Cart from './components/Cart'
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
        <Route path="/cart" element={ <Cart />} />
        <Route path="/profile" element={ <Profile />} />

      </Routes> 
    </div>
  )
}

export default App
