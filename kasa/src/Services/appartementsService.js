import { getDatasLogements } from './Service.js'
import AppartementDatas from '../Utils/AppartementDatas.jsx'
/**
 * Fonction faisant appel à la fonction getDatasLogements() du fichier Service.js
 * Récupère les données de la fonction fetch 
 * Map des datas pour convertir les données en objet "AppartementData"
 * @returns les données de tous les appartements sous forme d'objets
 */
export default async function appartInfo() {
    let datas = {}

    datas = await getDatasLogements()
        // console.log(datas)

    const appartementDatas = datas.map((info) => new AppartementDatas(info))
        // console.log("***Appart datas", appartementDatas)

    return appartementDatas
}