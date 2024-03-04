import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import {BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import AutoPlay from './components/Home/BrandSlider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)

