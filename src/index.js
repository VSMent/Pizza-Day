import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import './index.css';
import {routes} from "./routes";
import {Header} from "./Header";
import {HomePage} from "./HomePage";
import {AboutPage} from "./AboutPage";


const App = () => (
  <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path={routes.HOME} component={HomePage}/>
      <Route path={routes.PRODUCTS} render={() => <div>Products</div>}/>
      <Route path={routes.ABOUT} component={AboutPage}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);