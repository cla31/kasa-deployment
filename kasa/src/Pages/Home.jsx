import React, { useEffect, useState } from 'react'
import '../Style/Pages/Home.css'
import Gallery from '../Components/Gallery'
import Banniere from '../Components/Banniere'
import Photo from '../Assets/banniere_accueil.png'
import { Link } from 'react-router-dom'
import Appartements from '../Services/appartementsService.js'
import Loader from '../Components/Loader'

/**
 * Page d'accueil (Home) appelant les composants Banniere et Gallery dans un template HTML
 *
 * @returns {JSX.Element} Composant Home
 */

const Home = () => {
  const [datas, setDatas] = useState([])
  const [isLoading, setIsloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      const getAllApparts = async () => {
        const gallery = await Appartements()
        setDatas(gallery)
        // console.log('Gallerie', Gallery)
      }
      getAllApparts()
      setIsloading(false)
    }, 2000)
  }, [])
  //On peut mettre plusieurs useEffect
  // useEffect(() => {
  //   console.log(datas)
  // }, [datas])

  return (
    <div className="Home">
      <Banniere
        photo={Photo}
        title={'Chez vous, partout et ailleurs'}
        description={
          "Photo de la bannière en page d'accueil, vagues et criques sauvages"
        }
      />
      {/* https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
      <div className="GalleryLogements">
        {isLoading ? (
          <Loader />
        ) : (
          datas?.map(({ title, cover, id }) => {
            return (
              <Link to={`/logement/${id}`} key={`${title}-${id}`}>
                <Gallery title={title} cover={cover}></Gallery>
              </Link>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Home
