import React from 'react';
import './article.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Article = () => (
  <div className="chartepageglobal">
    <div className="container">

      <div className="articlecoverimg">
        <div className="transbox">
          <p className="black">Article 1 (date) - De Anais Jaunay</p>


        </div>
      </div>
      <br />
      <div className="titrearticle">Titre de l'article</div>
      <p className="blocarticle">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium temporibus explicabo ullam nesciunt iste, natus libero ea perferendis dicta quae nisi? Itaque sunt soluta provident aliquid ad alias deleniti. Repellendus.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium temporibus explicabo ullam nesciunt iste, natus libero ea perferendis dicta quae nisi? Itaque sunt soluta provident aliquid ad alias deleniti. Repellendus.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium temporibus explicabo ullam nesciunt iste, natus libero ea perferendis dicta quae nisi? Itaque sunt soluta provident aliquid ad alias deleniti. Repellendus.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium temporibus explicabo ullam nesciunt iste, natus libero ea perferendis dicta quae nisi? Itaque sunt soluta provident aliquid ad alias deleniti. Repellendus.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium temporibus explicabo ullam nesciunt iste, natus libero ea perferendis dicta quae nisi? Itaque sunt soluta provident aliquid ad alias deleniti. Repellendus.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium temporibus explicabo ullam nesciunt iste, natus libero ea perferendis dicta quae nisi? Itaque sunt soluta provident aliquid ad alias deleniti. Repellendus.
      </p>

      <p className="blocarticle">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium temporibus explicabo ullam nesciunt iste, natus libero ea perferendis dicta quae nisi? Itaque sunt soluta provident aliquid ad alias deleniti. Repellendus.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium temporibus explicabo ullam nesciunt iste, natus libero ea perferendis dicta quae nisi? Itaque sunt soluta provident aliquid ad alias deleniti. Repellendus.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium temporibus explicabo ullam nesciunt iste, natus libero ea perferendis dicta quae nisi? Itaque sunt soluta provident aliquid ad alias deleniti. Repellendus.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium temporibus explicabo ullam nesciunt iste, natus libero ea perferendis dicta quae nisi? Itaque sunt soluta provident aliquid ad alias deleniti. Repellendus.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium temporibus explicabo ullam nesciunt iste, natus libero ea perferendis dicta quae nisi? Itaque sunt soluta provident aliquid ad alias deleniti. Repellendus.
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium temporibus explicabo ullam nesciunt iste, natus libero ea perferendis dicta quae nisi? Itaque sunt soluta provident aliquid ad alias deleniti. Repellendus.
      </p>

      <div className="bouttondevischarte">
        <NavLink exact smooth to="/#home" className="waves-effect waves-light btn blue darken-1">Accueil</NavLink>
      </div>

    </div>
  </div>

);

export default Article;
