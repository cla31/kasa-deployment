import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Apropos from './Pages/Apropos'
import Home from './Pages/Home'
import Logement from './Pages/Logements'
import Page404 from './Pages/Page404'
import Header from './Components/Header'
import Footer from './Components/Footer'

/**
 *
 * fichier racine du projet
 * contenant le router du projet avec des chemins vers les pages de l'application
 * les composants Header et Footer
 * @author Claire M
 */
//C'est ici qu'on met le routeur
//pour éviter le warning dans la console
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Logement/:logementId" element={<Logement />} />
      <Route path="/Apropos" element={<Apropos />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
