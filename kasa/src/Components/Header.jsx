import React from 'react'
import logo from '../Assets/logo_header.png'
import '../Style/Components/Header.css'
import { NavLink } from 'react-router-dom'

/**
 * Composant Header avec récupération du Logo et mise en place de la navigation
 * @returns {JSX.Element} composant Header
 */

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="logo" />
      <nav>
        <NavLink
          className={(Home) => (Home.isActive ? 'active' : '')}
          to="/"
          end
        >
          Accueil
        </NavLink>
        <NavLink
          className={(Apropos) => (Apropos.isActive ? 'active' : '')}
          to="/Apropos"
        >
          À Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
