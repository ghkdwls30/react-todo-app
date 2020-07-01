import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, Router, Switch} from "react-router";
import Page1 from "./page/Page1";
import Page2 from "./page/Page2";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
      <Switch>
           <Route exact path={"/"} component={App} />
           <Route exact path={"/page1"} component={Page1} />
           <Route exact path={"/page2"} component={Page2} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
