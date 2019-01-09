import React from 'react';
import PropTypes from 'prop-types';
import femaleavatar from '../../assets/img/femaleA.png';
import './card.css';


const CardBody = ({
  title, content, firstname, lastname, main_picture
}) => (
  <div className="col s12 m6 l4">
    <div className="card hoverable">
      <div className="card-image">
        <img className="materialboxed" src={main_picture} alt="" />
      </div>
      <div className="card-content">
        <p className="left-align"><b>{title}</b></p>
        <hr />
        <p className="left-align">
          {`"
          ${content.slice(0, 150)}
          ..."`}
        </p>
        <br />
        <div className="card-action">
          <div className="row valign-wrapper">
            <div className="col s4">
              <img src={femaleavatar} alt="" className="circle responsive-img" />
            </div>
            <div className="col s8">
              <span className="black-text left-align">
                <b>{`${firstname} ${lastname}`}</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

);

CardBody.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  main_picture: PropTypes.string.isRequired,
};

export default CardBody;
