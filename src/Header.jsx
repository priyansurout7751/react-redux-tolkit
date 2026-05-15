import React from 'react'
import './App.css'
import Cart from './Cart'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
              <header className="header">
        <h1>My Website</h1>

        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li>About</li>
            
          </ul>
          
        </nav>
        <Cart/>
      </header>


    </div>
  )
}

export default Header