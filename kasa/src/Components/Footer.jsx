import React from 'react'
import logoFooter from '../Assets/logo_footer.png'
import '../Style/Components/Footer.css'

/**
 * Composant footer avec logo
 *
 * @returns {JSX.Element} composant Footer
 */

const Footer = () => {
  return (
    <footer>
      <img src={logoFooter} alt="logo en noir" />
      <p> © 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
