import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div id="NavLinks">
       <Link  to='/' >Home</Link> 
       <Link  to='/about'  >About</Link>
       <Link  to='/characters' >Characters</Link>
       <Link  to='/characters/new' >New Characters</Link>
    </div>
  )
}

export default Navbar