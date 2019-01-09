/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';
import routes from './routes/routes';
import * as serviceWorker from './serviceWorker';
import ScrollToTop from './ScrollToTop';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        {routes.map(({ path, component: C }) => (
          <Route exact path={path} key={path} render={props => <C {...props} />} />
        ))}
      </Switch>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root'),
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
