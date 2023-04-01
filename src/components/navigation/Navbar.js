import React from 'react'
import { NavLink } from 'react-router-dom'
 
function Navbar() {
    const style = {
        width: "30%",
        margin: "5% 0 1%",
        padding: "1em",
        textDecoration: "none",
        color: "black",
    }
  return (
    <div className="navLinks" >
       <NavLink style={style} to='/' >Home</NavLink> 
       <NavLink style={style} to='/about'  >About</NavLink>
       <NavLink style={style} to='/characters' >Characters</NavLink>
       <NavLink style={style} to='/characters/new' >New Characters</NavLink>
    </div>
  )
}

export default Navbar