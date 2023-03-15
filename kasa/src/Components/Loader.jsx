import React from 'react'
import BallGrey from '../Assets/Ball-back-grey.gif'

const Loader = () => {
  return (
    <div className="loader">
      <img
        src={BallGrey}
        alt="Loader en attente du chargement des données"
      ></img>
    </div>
  )
}

export default Loader
