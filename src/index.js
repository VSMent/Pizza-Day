import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import './index.css';

const App = () => (
  <BrowserRouter>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" render={() => <div>Home Page</div>}/>
      <Route path="/products" render={() => <div>Products</div>}/>
      <Route path="/about" render={() => <div>About</div>}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);