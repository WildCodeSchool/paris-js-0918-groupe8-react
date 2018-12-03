import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
import BofficeMenu from "./components/boMenu/BofficeMenu";
import BoArticle from "./components/boarticle/BoArticle";
import BoBio from "./components/bobio/Bobio"
import BoMedias from "./components/bomedias/BoMedias"
import BoCommentaire from "./components/bocommentaire/BoCommentaire"
import BoAdmin from "./components/boadmin/BoAdmin"

class App extends Component {
  render() {
    return (
      <div>
<Switch>

          <Route exact path="/" component={BofficeMenu} />
          
          <Route exact path="/BoArticle" component={BoArticle} />
          <Route exact path="/BoBio" component={BoBio} />
          <Route exact path="/BoMedias" component={BoMedias} />
          <Route exact path="/BoCommentaire" component={BoCommentaire} />
          <Route exact path="/BoAdmin" component={BoAdmin} />


</Switch>
   
      </div>
    );
  }
}

export default App;
