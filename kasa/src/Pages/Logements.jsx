import React, { useEffect, useState } from 'react'
import '../Style/Pages/Logement.css'
import { useNavigate, useParams } from 'react-router-dom'
import Tag from '../Components/Tag'
import Carroussel from '../Components/Carroussel'
import Dropdown from '../Components/Dropdown'
import Rating from '../Components/Rating'
import Appartement from '../Services/appartementsService'

/**
 * Page détails d'un logement cliqué sur la page d'accueil
 *  appelle les composants Carroussel, Tag, Rating, Dropdown dans un template HTML
 * @returns {JSX.Element} Composant Logement
 */

const Logement = () => {
  const { logementId } = useParams()
  // console.log('id du logement', logementId)
  const navigate = useNavigate()
  const [datas, setDatas] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: '',
    host: { name: '', picture: '' },
  })
  useEffect(() => {
    const allApparts = async () => {
      const items = await Appartement()
      // console.log('ITEMMMMMMMS', items)
      const item = items.find((appart) => appart.id === logementId)
      // console.log('ItemID', item)
      if (!item) {
        navigate('/Page404')
      }
      setDatas(item)
    }

    allApparts()
  }, [logementId, navigate]) //quick fix

  return (
    <div className="ficheLogement">
      <div className="navig">
        <Carroussel pictures={datas.pictures} />
      </div>
      <div className="contentLogement">
        <div className="titre-nom">
          <div className="titre">
            <h2>{datas.title}</h2>
            <p>{datas.location}</p>
          </div>
          <div className="nom">
            <h3>{datas.host.name}</h3>
            <img src={datas.host.picture} alt={datas.host.name} />
          </div>
        </div>

        <div className="tag-eval">
          <div className="tags">
            {datas.tags.map((tag, index) => (
              <Tag tagsNom={tag} key={index} />
            ))}
          </div>
          <div className="rating">
            <Rating stars={datas.rating} />
          </div>
        </div>

        <div className="descript-equip">
          <div className="description">
            <Dropdown
              title="Description"
              text={
                <div className="descript-logement">{datas.description}</div>
              }
            />
          </div>
          <div className="equipements">
            <Dropdown
              title="Équipements"
              text={
                <div className="listItem">
                  {datas.equipments.map((elmt, index) => (
                    <li key={index}>{elmt}</li>
                  ))}{' '}
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Logement
