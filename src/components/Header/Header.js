import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => (
  <header>
    <nav>
      <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
      <NavLink to="/about" activeClassName="active-link">About</NavLink>
    </nav>
  </header>
)

export default Header