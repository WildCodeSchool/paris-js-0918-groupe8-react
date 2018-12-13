import React from 'react';
import './chartepage.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Chartepage = () => (

  <div className="chartepageglobal">
    <div className="container">

      <div className="testsitecoverimg">


        <div className="transbox">
          <p className="black">CHARTE</p>


        </div>

      </div>

      <p>
        <b>On vous a menti.</b>
        <br />
        <br />
        Internet n’est pas le royaume des développeurs, des ingénieurs,&nbsp;
        des data scientistes ou des entrepreneurs. Ils ne font qu’en définir les contours.&nbsp;
        Ils construisent la carcasse.
        <br />
        <br />
        <b>Si les foules se connectent, ce n’est pas pour explorer l’architecture de la boîte.</b>
        &nbsp;Ils viennent voir ce qu’il y a dedans.
        <br />
        <br />
        <i>« Content is king »</i>
        &nbsp;C’est le titre d’un essai de Bill Gates qui date de 1996 et qui dit simplement ceci :
        <blockquote>« Le contenu, c’est là où, selon moi, une grande partie de la fortune tangible sera générée sur internet, tout comme dans la diffusion télé. »</blockquote>

        <b>Ce qui fait venir les foules, c’est le « il était une fois ».</b>
        <br />
        <br />

        Ceux qui font battre le cœur d’internet, ce sont les créateurs de contenu.&nbsp;
        Et l’avenir du royaume digital leur appartient, tout comme le cinéma a créé
        l’empire des studios.
        <br />
        <br />
        <b>La plupart des entreprises n’ont pas vraiment pris la mesure de l’importance du contenu.</b>
          Ce mot un peu terne et très pudique : «contenu»,&nbsp;
          illustre à lui seul cette omission monumentale.
        <br />
        <br />
        <b>Le moment est venu de redonner la place qu’il convient aux littéraires sur la toile.</b>
        &nbsp;Non pas par charité. Mais parce que les entreprises qui ne développent pas leur&nbsp;
          storytelling vont perdre leur audience. Et connaître une mort prématurée.
        <br />
        <br />
        <b>Le conteur digital</b>
          , cette
        <b>espèce en voie d’apparition</b>
        est celui qui cimente la tribu digitale, qui rassemble autour d’une marque une&nbsp;
        communauté qui lui donnera tout son ciment.
        <br />
        <br />
        <b>Le conteur digital</b>
        est celui qui travaille en relation étroite avec l’entrepreneur,&nbsp;
        pour raconter son histoire à travers le world wide web.&nbsp;
        Il collabore avec le développeur, pour donner sens et relief à un site internet.&nbsp;
        Il fait équipe avec le marketeur, pour démultiplier la portée de ses messages.
        <br />
        <br />
        <b>Si le contenu est roi, l’écriture est reine.</b>
        <br />
        <br />
        Et le storytelling est un domaine technique, tout comme la programmation informatique. 
        La terrible vérité, c’est qu’il n’y a pas beaucoup de bons scénaristes.

        Le conteur digital possède ce savoir-faire et le met à disposition de votre identité.
      </p>
      <div className="bouttondevischarte">
        <NavLink exact smooth to='/#contact' className="waves-effect waves-light btn blue darken-1">Demander devis</NavLink>
      </div>

    </div>
  </div>

);

export default Chartepage;
