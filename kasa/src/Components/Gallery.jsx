import React from 'react'
import '../Style/Components/Gallery.css'
import PropTypes from 'prop-types'

/**
 * Composant Gallery
 * @param {String} [props.title='']
 * @param {String} [props.cover='']
 * @returns {JSX.Element} Composant Gallery
 */

const Gallery = ({ title, cover }) => {
  //Quand on met des brakets on lui dit d'interpréter une variable
  return (
    <div className="gallery">
      <img src={cover} alt={title} />
      <div className="filtreGallery"></div>
      <h2>{title}</h2>
    </div>
  )
}
//typage des props
Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string,
}

export default Gallery
