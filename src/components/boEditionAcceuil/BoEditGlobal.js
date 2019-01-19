import React from 'react';

import BoCoverEdit from './BoCoverEdit';
import Coverimage from '../cover/cover';
import BoCharteEdit from './BoCharteEdit';
import Charte from '../charte/charte';
import Newsletter from '../newsletter/newsletter';
import Service from '../Service/service';
import About from '../about/about';

const BoEditGlobal = () => (
  <div>
    <div className="divider" />
    <div className="section">
      <div className="row">
        <div className="col s5">
          <div className="card-panel teal lighten-5">
            <BoCoverEdit />
          </div>
        </div>
        <div className="col s7">
          <Coverimage />
        </div>
      </div>
    </div>

    <div className="divider" />
    <div className="section">
      <div className="row">
        <div className="col s5 ">
					<div className="card-panel teal lighten-5">
						<BoCharteEdit />
					</div>
				</div>
        <div className="col s7">
          <Charte />
        </div>
      </div>
    </div>

    <div className="divider" />
    <div className="section">
      <div className="row">
        <div className="col s5" />
        <div className="card-panel teal lighten-5">
          {/* Inseré le composant ici */}
        </div>
        <div className="col s7">
          <Newsletter />
        </div>
      </div>
    </div>

    <div className="divider" />
    <div className="section">
      <div className="row">
        <div className="col s5" />
        <div className="card-panel teal lighten-5">
          {/* Inseré le composant ici */}
        </div>
        <div className="col s7">
          <Service />
        </div>
      </div>
    </div>

    <div className="divider" />
    <div className="section">
      <div className="row">
        <div className="col s5" />
        <div className="card-panel teal lighten-5">
          {/* Inseré le composant ici */}
        </div>
        <div className="col s7">
          <About />
        </div>
      </div>
    </div>
  </div>
  // );
);

export default BoEditGlobal;
