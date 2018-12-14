import React from 'react';
import './biomathias.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Imgmac from '../../assets/img/macintosh.png';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

const Biomathias = () => (
  <div>
    <Navbar />
    <div className="chartepageglobal">
      <div className="container">

        <div className="testsitecoverimg">

          <div className="transbox">
            <p className="black">Mathias Savary</p>
          </div>
        </div>

        <p>
          <br />
          <b>Il était une fois...un rat</b>
          <br />
          <br />
        Alors voilà : je suis un rat de bibliothèque. Quand j’étais au collège,&nbsp;
        le métier que j’exerce aujourd’hui n’existait tout simplement pas.&nbsp;
        Et moi, je ne savais pas trop ce que je voulais faire. J’aimais surtout lire&nbsp;
        (environs 2 à 3 livres par semaine) et écrire.
          <br />
          <br />
         À l’époque, on m’a dit
        que le monde appartenait aux filières scientifiques et aux écoles de commerce.&nbsp;
        Mais j’étais passionné et aussi très têtu. J’ai choisi de faire une terminal littéraire.
          <br />
          <br />
        Je pensais m’enfoncer dans une voie de garage. J’ai vraiment pensé que j’avais choisi&nbsp;
        la mauvaise orientation. Et un jour, j’ai réalisé que j’étais arrivé quelque part.
          <br />
          <br /> 
        Parce que, les amis, la VRAIE disruption dans le marketing digital N’est PAS technologique.&nbsp;
        Elle vient de l’écrit.&nbsp;
          <b>Elle est poétique !</b>
          <br />
          <br />
          <b>L’écriture n’est pas un loisir, c’est un métier</b>
          <br />
          <br />
        Petit retour en arrière. J’ai commencé à écrire régulièrement à l’âge de 15 ans.&nbsp;
        Régulièrement, ça veut dire toutes les semaines. Puis, tous les jours.
          <br />
          <br />
        J’ai lu des dizaines de livres sur les techniques d’écriture. Et j’ai commencé à coller
        des règles de narration sur les murs de ma chambre. J’ai acheté des cahiers puis&nbsp;
        j’ai écrit mes premières nouvelles sur un Mackintosh SE 1987.
          <br />
          <br />
          <img src={Imgmac} alt="" width="200" height="200" />
          <br />
          <br />
        Vous le trouvez moche ? En 1996, il trônait au milieu de mon bureau et c’était pour moi
        la 8e merveille du monde.
          <br />
          <br />
        C’est en 2008 que j’ai commencé à travailler sur la rédaction web.&nbsp;
        J’étais inscrit sur différentes plateformes comme Greatcontent.com.&nbsp;
        J’y ai appris le travail sur les mots clés, la capacité à écrire sur des sujets&nbsp;
        très divers et la rapidité d’exécution.
          <br />
          <br />
        En 2013, j’ai animé trois blogs sur la défiscalisation et les placements financiers.&nbsp;
        J’y ai découvert le blogging.
          <br />
          <br />
        En 2016, j’ai pu explorer la richesse de la rédaction web et du storytelling. J’ai fait :
      
          <ul>
            <li>des emails</li>
            <li>des pages pour gagner la première page de Google (et j’ai souvent réussi à atteindre la première place !)</li>
            <li>des articles de blogs (dont certains parus sur Maddyness, Frenchweb, Presse-citron, economiematin.com, etc.)</li>
            <li>des publications sur les réseaux sociaux</li>
            <li>des communiqués de presse</li>
            <li>des scénarii pour des vidéos de promotion</li>
          </ul>
     
          <b>Un conteur digital</b>
          <br />
          <br />
        Le storytelling et le SEO bénéficient aujourd’hui de l’apport des nouvelles technologies.&nbsp;
        ça veut dire que le métier de conteur digital est de plus en plus technique.
          <br />
          <br />
        Concrètement comment je bosse ? 
          <br />
          <br />
        1/au commencement était... le persona (le public cible)  !&nbsp;
        Le marketing de masse est mort, vive la personnalisation !&nbsp;
        Tout commence par découvrir quel est son public cible et tout ce que l’on sait de lui.&nbsp;
        C’est l’alpha et l’oméga. C’est mon maître étalon.
          <br />
          <br />
        2/on passe alors à la phase d’exploration. Je me plonge à la découverte de&nbsp;
        l’écosystème d’une thématique. Il existe beaucoup d’outils de mesure&nbsp;
        (SEMrush, Similar web, Majestic SEO, Buzzsumo...) pour savoir ce qui marche vraiment.&nbsp;
        Exit la boule de cristal... ou l’intuition du directeur artistique et place à la science.
          <br />
          <br />
        3/viens le moment de la création et l’application des techniques d’écriture pour le web.&nbsp;
        Pour ça, je puise aussi bien chez Seth Godin que chez les papes de l’écriture&nbsp;
        scénaristique : John Truby, Robert McKee et Stephen King.
          <br />
          <br />
        Et puis, il y a des échanges à chaque étape avec vous. Parce que lorsque j’aborde un projet,&nbsp;
        on devient un “nous”. On travaille ensemble. On part à la découverte d’une histoire.
          <br />
          <br />
        Il était une fois...nous.
        </p>
        <div className="bouttondevischarte">
          <NavLink exact smooth to="/#contact" className="waves-effect waves-light btn blue darken-1">Demander devis</NavLink>
        </div>
      </div>
      <Footer />
    </div>
  </div>
  
);

export default Biomathias;
