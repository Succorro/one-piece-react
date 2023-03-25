import React from 'react'
import { Link } from 'react-router-dom'
 
function Navbar() {
    const style = {
        width: "30%",
        margin: "5% 0 1%",
        padding: "1em",
        textDecoration: "none",
        color: "black",
    }
  return (
    <div className="navLinks">
       <Link style={style} to='/' >Home</Link> 
       <Link style={style} to='/about'  >About</Link>
       <Link style={style} to='/characters' >Characters</Link>
       <Link style={style} to='/characters/new' >New Characters</Link>
    </div>
  )
}

export default Navbar