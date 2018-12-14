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
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <ScrollToTop>
      <Switch>
        {routes.map(prop => (
          <Route exact path={prop.path} key={prop.path} component={prop.component} />
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
