import React from 'react';
import EditButton from '../buttons/EditButton';
import TrashButton from '../buttons/TrashButton';

import HomePageButton from '../buttons/HomePageButton';
import './BOcardListArticle.css';

// il faudra rajouter les champs auteur et media quand les routes du back seront écrites...

const Article = ({
  update_date, title, content, author,
}) => (
  <div>

    {/* <ul className="list pl0">
      <li className="flex justify-between pa4-ns bb b--black-10">
      <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
        <img src="https://via.placeholder.com/140x100" className="db" alt="placeholder" />
      </div>
      <div>
        <b className="db f3 mb1">{title}</b>
        <span className="f5 db lh-copy measure">
          Par Anaïs
        </span>
        <time className="f6 db gray">
Mise à jour le
          {' '}
          {update_date}
        </time>
      </div>
      <div>
        <EditButton />
        <TrashButton />
        <HomePageButton />
      </div>
    </li>
    </ul> */}


    <section className="mw8 center">
      <article className="pv4 bt bb b--black-10 ph3 ph0-l">
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <h1 className="f2 athelas mt0 lh-title ">{title}</h1>

            <div className="scroll-bar-wrap">
              <div className="scroll-box">
                <p className="f8 f4-l lh-copy athelas tj">
                  {content}
                </p>
              </div>

            </div>
            {' '}

          </div>
          <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
            <div>
              <EditButton />
              <TrashButton />
              <HomePageButton />
            </div>
            <br />
            <img src="https://via.placeholder.com/400x400" className="db" alt="Photo of a whale's tale coming crashing out of the water." />
          </div>
        </div>

        <p className="f6 lh-copy gray mv0">
De
          {' '}
          <span className="ttu">Auteur</span>
        </p>
        <time className="f6 db gray">01 jan 2019</time>
      </article>

    </section>
  </div>
);


export default Article;
