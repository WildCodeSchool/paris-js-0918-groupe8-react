import React from 'react';
import BofficeMenu from '../components/boMenu/BofficeMenu';
import BoFooter from '../components/bofooter/BoFooter';

const BOarticles = () => (
  <div>
    <BofficeMenu />

    <div>
      <p className="measure center">
        <form className="pa4 black-40">
          <label htmlFor="caseArticle" className="f1 measure ">
          Ecrire un article
            {' '}
            <textarea id="caseArticle" className=" h5 w-100 " />
          </label>

        </form>
        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Valider" />
      </p>
    </div>
    <BoFooter />
  </div>
);

export default BOarticles;
