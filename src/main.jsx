import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from './components/Cards.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home.jsx'
import AutoPlay from './components/BrandSlider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
      <Card />
      
    
    </Router>
  </React.StrictMode>
)

