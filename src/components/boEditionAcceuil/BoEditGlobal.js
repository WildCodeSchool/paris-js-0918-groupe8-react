import React from 'react';

import BoCoverEdit from './BoCoverEdit';
import Coverimage from '../cover/cover';

import BoCharteEdit from './BoCharteEdit';
import Charte from '../charte/charte';

import BoNewsletterEdit from './BoNewsletterEdit';
import Newsletter from '../newsletter/newsletter';

import BoService1Edit from './BoService1Edit';
import BoService2Edit from './BoService2Edit';
import BoService3Edit from './BoService3Edit';

import BoAboutAnaisEdit from './BoAboutAnaisEdit';
import BoAboutMathiasEdit from './BoAboutMathiasEdit';

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
        <div className="col s5">
					<div className="card-panel teal lighten-5">
						<BoNewsletterEdit />
					</div>
				</div>
        <div className="col s7">
          <Newsletter />
        </div>
      </div>
    </div>

    <div className="divider" />
    <div className="section">
      <h3 className="center-align titreblog1">SERVICES</h3>
      <div className="row">
			<div className="col s4">
					<div className="card-panel teal lighten-5">
						<BoService1Edit />
					</div>
				</div>
				<div className="col s4">
					<div className="card-panel teal lighten-5">
						<BoService2Edit />
					</div>
				</div>
				<div className="col s4">
					<div className="card-panel teal lighten-5">
						<BoService3Edit />
					</div>
				</div>
			</div>
		</div>
    <div className="divider" />
    <div className="section">
      <h3 className="center-align titreblog1">ABOUT</h3>
      <div className="row">
			<div className="col s6">
					<div className="card-panel teal lighten-5">
						<BoAboutAnaisEdit />
					</div>
				</div>
				<div className="col s6">
					<div className="card-panel teal lighten-5">
            <BoAboutMathiasEdit />
					</div>
				</div>
      </div>
    </div>
	</div>
);

export default BoEditGlobal;
