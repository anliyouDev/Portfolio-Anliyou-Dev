import { useState } from "react";
// import photo from './assets/img/logo.png';
import Navbar from "./assets/Navbar/Navbar";
import Acceuil from "./assets/Acceuil/Acceuil"
import Propos from "./assets/propos/propos"
import Competences from "./assets/competences/competences";
import Projets from "./assets/projet/realisation";
import Contact from "./assets/contact/contact"
import Footer from "./assets/footer/footer"
import { Routes, Route } from "react-router-dom";
function Assemblage() {
  return(
  <>
  <Navbar/>

    <section id="acceuil"><Acceuil/></section>
    <section id="propos"><Propos/></section>
    <section id="Competences" ><Competences/></section>
    <section id="Projets"><Projets/></section>
    <section id="Contact"><Contact/></section>

  <Footer/>
  </>
  
)
}

export default Assemblage