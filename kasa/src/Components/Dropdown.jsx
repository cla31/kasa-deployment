import React from 'react'
import arrow from '../Assets/arrow.svg'
import '../Style/Components/Dropdown.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

/**
 * Composant Dropdown avec titre, texte, ouverture au click sur la flèche
 * @param {String} [Props.text='']
 * @param {String} [Props.title='']
 * @returns {JSX.Element} Composant Dropdown
 */
const Dropdown = ({ title, text }) => {
  const [dropdownOpen, setDropdown] = useState(false)

  //Si le dropdown est ouvert on fait tourner arrow
  let classArrow = ''
  if (dropdownOpen === true) {
    classArrow = 'arrowOpen'
  }

  return (
    <div className="dropdown">
      <div
        className="titre-dropdown"
        onClick={() => {
          setDropdown(dropdownOpen === false)
        }}
      >
        <h3>{title}</h3>
        <img
          className={classArrow}
          src={arrow}
          alt="Contenu visible"
          onClick={() => setDropdown(true)}
        />
      </div>

      {dropdownOpen && <div className="paragraphe">{text}</div>}
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.any,
}

export default Dropdown
