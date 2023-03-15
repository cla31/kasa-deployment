import React from 'react'
import '../Style/Components/Tag.css'
import PropTypes from 'prop-types'

/**
 * Creation du composant Tags
 * @param {object} [Props.tagsNom=[]]
 * @returns {JSX.Element} Composant Tags
 */

const Tag = ({ tagsNom }) => {
  return <div className="tag">{tagsNom}</div>
}
Tag.propTypes = {
  tagsNom: PropTypes.object.isRequired,
}

export default Tag
