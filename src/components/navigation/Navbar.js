import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div id="NavLinks">
       <Link  to='/' exact>Home</Link> 
       <Link to='/about' exact >About</Link>
       <Link to='/characters' exact>Characters</Link>
       <Link to='/characters/new' exact>New Characters</Link>
    </div>
  )
}

export default Navbar