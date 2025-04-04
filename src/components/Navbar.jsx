import React from 'react'
import { Link, Links } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display:'flex' , padding:'8px', justifyContent:'space-between', margin:'0 10px' , background:'black', color:'white'}}>
      <Link to='/'><h2>Logo</h2></Link>
        <ul style={{display:'flex',gap:'5px',listStyle:'none'}}>
            <li>About</li>
            <Link to='/contact'><li>Contact</li></Link>
            <li>Products</li>
        </ul>
       <Link to='/login'>Login</Link>
    </div>
  )
}

export default Navbar