import React from "react";
import "./cover.css";

const Coverimage = () => {
    return (
        <div className="global" id="home">

            <div class="container">
                <p className="titrecovertest center-align">Conteur Digital</p>

                <div class="row">

                    <p className="enonce">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
                         </p>

                </div>
                <div class="row">
                    <div className="coverbuttonname">
                        <a href="#test" className="waves-effect waves-light btn indigo darken-2" >Mathias Savary</a>
                        <a href="#test" className="waves-effect waves-light btn red darken-1">Anais Jaunay</a>

                    </div>

                </div>

            </div>
        </div>
    );

}

export default Coverimage;