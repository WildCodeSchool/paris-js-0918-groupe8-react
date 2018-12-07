import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "./navbar.css";
import Logo from '../../assets/img/conteurDigitalcrop.png';

class Navbar extends Component {

    componentDidMount() {
        const elem = document.querySelector(".sidenav");
        M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        return (
            <div>
               
                    <nav className="Navbarfuck navbar-fixed">
                        <div className="nav-wrapper">
                            <a href="#test"> <img className="left hide-on-med-and-down" src={Logo} width="60" height="60" alt="twitter"></img></a>
                            <a href="#test" data-target="mobile-demo" className="sidenav-trigger"><i class="material-icons">menu</i></a>
                            <ul class="right hide-on-med-and-down menunavbar">
                                <li className="texte1"><a href="#test">Accueil</a></li>
                                <li><a href="#test">Charte</a></li>
                                <li><a href="#test">Blog</a></li>
                                <li><a href="#test">A propos</a></li>
                                <li><a href="#test">Contact</a></li>
                                <li><a href="sass.html"><i class="material-icons">search</i></a></li>

                            </ul>
                        </div>
                    </nav>
                

                <ul class="sidenav" id="mobile-demo">
                    <li><a href="#test">Accueil</a></li>
                    <li><a href="#test">Charte</a></li>
                    <li><a href="#test">Blog</a></li>
                    <li><a href="#test">A propos</a></li>
                    <li><a href="#test">Contact</a></li>

                </ul>


            </div>
        );
    }
}

export default Navbar;
