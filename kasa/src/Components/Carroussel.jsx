import { useState } from 'react'
import '../Style/Components/Carroussel.css'
import suivant from '../Assets/suivant.png'
import precedent from '../Assets/precedent.png'
import PropTypes from 'prop-types'

/**
 * Composant carrousel avec navigation et compteur d'images
 * @param {string[]} [Props.pictures=[""]]
 * @returns {JSX.Element} Composant Carroussel
 */

const Carroussel = ({ pictures }) => {
  //L'index est à 0
  //pictures.length = 6 photos par expl
  //photo 1 = index 0
  const [index, setIndex] = useState(0)
  // console.log('index', index)
  // console.log('pictures.lenght', pictures.length)
  function next() {
    if (index === pictures.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  function prev() {
    if (index === 0) {
      setIndex(pictures.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  function navigation() {
    return (
      <div className="navigation">
        <img
          src={precedent}
          className="precedent"
          onClick={prev}
          alt="precédent"
        />
        <img src={suivant} className="suivant" onClick={next} alt="suivant" />
        {/* Ci-dessous le compteur pour se repérer dans la navigation */}
        <p>
          {index + 1}/{pictures.length}
        </p>
      </div>
    )
  }
  return (
    <div
      className="photo"
      style={{ backgroundImage: `url("${pictures[index]}")` }}
    >
      {pictures.length > 1 ? navigation() : ''}
    </div>
  )
}

//typage de la props
Carroussel.propTypes = {
  pictures: PropTypes.array.isRequired,
}
export default Carroussel
