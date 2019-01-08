import React from 'react';
import './bioanais.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Imganais from '../../assets/img/logoanais.png';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

const Bioanais = () => (
  <div>
    <Navbar />
    <div className="chartepageglobal">
      <div className="container">

        <div className="anaiscoverimg">

          <div className="transbox">
            <p className="black">Anaïs Jaunay</p>
          </div>
        </div>
        <br />
        <br />
        <p className="soustitrebio">Parler de ceux qui vivent leur métier comme un artisanat, redonnent de la valeur à tout ce que l’on consomme.</p>


        <p>Parce que les entreprises sont de formidables histoires collectives, parce que je suis une militante des contenus de qualité, parce que pour faire ma part, je raconte les histoires de ceux qui se battent pour un entrepreneuriat et des projets respectueux des individus et de la planète.</p>

        <p>J’ai eu une première carrière de 12 années dans le journalisme (France 2, Public Sénat, Europe 1), la réalisation de documentaires (Planète+, TV5 monde) et la scénarisation.Il y a deux ans, j’ai écrit la biographie de Robert Fabre, résistant dans le Vercors.    </p>

        <p>Grande lectrice, passionnée par les vies, les récits, j’ai retrouvé là une évidence : le pouvoir des mots et des histoires.</p>

        <p>Aujourd’hui les plus belles histoires, je les trouve auprès des entrepreneur(e)s. Parce que comme les Hommes, les entreprises sont des patrimoines, des petits mondes, aujourd’hui je conçois les stratégies éditoriales et rédige les contenus des entreprises.</p>

        <p>Je mets ma curiosité, ma passion, mon talent au service d’un storytelling qui renforcera et rendra unique l’identité de votre entreprise.</p>


              Ambassadrice de l’association Action'elles :
        {' '}
        <a href="https://www.actionelles.fr/">https://www.actionelles.fr/</a>
        <br />
              Membre du collectif plus :
        {' '}
        <a href="http://plus.ecedi.fr/">http://plus.ecedi.fr/</a>
        <br />
        <br />
        <center><img src={Imganais} alt="" width="200" height="200" /></center>

        <div className="bouttondevischarte">
          <NavLink exact smooth to="/#contact" className="waves-effect waves-light btn blue darken-1">Demander devis</NavLink>
        </div>
      </div>
      <Footer />
    </div>
  </div>

);

export default Bioanais;
