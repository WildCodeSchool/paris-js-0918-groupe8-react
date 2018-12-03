import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class BofficeMenu extends Component {
	render() {
		return (
			<div class="pa4 lh-copy">
				<a class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" href="#" title="Home">
					Le conteur Digital
				</a>

				<h1 class="f4 bold left mw5">Tableau de Bord</h1>

				<ul class="list pl0 ml0 left mw5 ba b--light-silver br3">
					<li class="ph3 pv2 bb b--light-silver">
					<a class="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black" href="#0">
					<NavLink to="/BoArticle">Articles</NavLink>
						</a>
					</li>
					<li class="ph3 pv2 bb b--light-silver">
						<a class="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black" href="#0">
							<NavLink to="/BoBio">Bio</NavLink>
						</a>
					</li>
					<li class="ph3 pv2 bb b--light-silver">
						<a class="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black" href="#0">
							<NavLink to="/BoMedias">Médias</NavLink>
						</a>
					</li>
					<li class="ph3 pv2 bb b--light-silver">
						<a class="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black" href="#0">
							<NavLink to="/BoCommentaire">Commentaires</NavLink>
						</a>
					</li>
					<li class="ph3 pv2 bb b--light-silver">
						<a class="f4 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue black" href="#0">
							<NavLink to="/BoAdmin">Administrateurs</NavLink>
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default BofficeMenu;
