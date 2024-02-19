import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(){
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/store">Shop</Link></li>
            <li><Link to="/inventory">Manage Inventory</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    )
}

export default NavBar