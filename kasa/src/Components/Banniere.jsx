import React from 'react'
import '../Style/Components/Banniere.css'
import PropTypes from 'prop-types'
/**
 * Création du composant Banniere
 * @param {String} [props.photos='']
 * @param {String} [props.title='']
 * @param {String} [props.description='']
 * @returns {JSX.Element} Composant Banniere
 */
const Banniere = ({ photo, title, description }) => {
  return (
    <div className="banniere">
      <img src={photo} alt={description} />
      {/* Condition pour afficher le title */}
      {title && <h1>{title}</h1>}
      <div className="filtre-photo"></div>
    </div>
  )
}

//Typage des props
Banniere.propTypes = {
  photo: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Banniere
