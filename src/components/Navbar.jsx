import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='container'>
      <Link style={{textDecoration:'none', 'color':'white'}} to='/'><h1 className='logo'>Logo</h1></Link>
      <ul className='liste'>
        <Link to='/about'><li>ABout</li></Link>
        <Link to='/services'><li>Services</li></Link>
        <Link to='/products'><li>Produits</li></Link>
      </ul>
      <button className='btn'>contact</button>
    </div>
  )
}

export default Navbar