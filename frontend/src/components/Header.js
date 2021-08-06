import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
   return (
      <header>
         <nav>
            <NavLink exact to='/'>
               <p>Home</p>
            </NavLink>
            <NavLink to='/cities'>
               <p>Cities</p>
            </NavLink>
            <NavLink to='/sign_up'>
               <p>Sign Up</p>
            </NavLink>
            <NavLink to='/sign_in'>
               <p>Sign In</p>
            </NavLink>
            </nav>
      </header>
   )
}

export default Header
