import React from "react";
import {Link, Switch, Route, useRouteMatch} from "react-router-dom";
import {routes} from "./routes";

export const ProductsPage = () => {
  const {path} = useRouteMatch(routes.PRODUCTS);
  return (
    <>
      <div>Products page</div>
      <ul>
        <li><Link to={routes.PRODUCTS_NEW}>New</Link></li>
        <li><Link to={routes.PRODUCTS_OLD}>OLD</Link></li>
      </ul>
      <Switch>
        <Route path={routes.PRODUCTS_OLD} render={() => <div>OLD</div>}/>
        <Route path={routes.PRODUCTS_NEW} render={() => <div>NEW</div>}/>
      </Switch>
    </>
  );
};