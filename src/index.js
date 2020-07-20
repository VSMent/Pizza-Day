import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import './index.css';
import {routes} from "./routes";
import {Header} from "./Header";
import {HomePage} from "./HomePage";
import {AboutPage} from "./AboutPage";
import {LoginPage} from "./LoginPage";
import {ProductsPage} from "./ProductsPage";

const isLoggedIn = false;

const App = () => (
  <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path={routes.HOME} render={() => isLoggedIn ? <HomePage/> : <Redirect to={routes.NOT_FOUND}/>}/>
      <Route path={routes.LOGIN} component={LoginPage}/>
      <Route path={routes.PRODUCTS} component={ProductsPage}/>
      <Route path={routes.ABOUT} component={AboutPage}/>
      <Route path={routes.NOT_FOUND} render={() => <div>Not found</div>}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);