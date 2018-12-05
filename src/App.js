
import React, { Component } from 'react';
import './App.css';
import Home from './screens/Home';


import { Switch, Route } from "react-router-dom";
import BofficeMenu from './components/boMenu/BofficeMenu';
import BoArticle from './components/boarticle/BoArticle';
import BoBio from './components/bobio/Bobio';
import BoMedias from './components/bomedias/BoMedias'
import BoCommentaire from './components/bocommentaire/BoCommentaire'
import BoAdmin from './components/boadmin/BoAdmin'
import BofficeLogin from './components/boLogin/BofficeLogin'


class App extends Component {
  render() {
    return (

      <div className="App">
      
       
      <div>
        <Switch>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/admin" component={BofficeLogin} />         
            <Route exact path="/BoArticle" component={BoArticle} />
            <Route exact path="/BoBio" component={BoBio} />
            <Route exact path="/BoMedias" component={BoMedias} />
            <Route exact path="/BoCommentaire" component={BoCommentaire} />
            <Route exact path="/BoAdmin" component={BoAdmin} />
        </Switch>
   
</div>
      </div>
    );
  }
}

export default App;
