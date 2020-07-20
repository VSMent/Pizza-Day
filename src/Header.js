import React from "react";
import {Link, useLocation} from "react-router-dom";
import {routes} from "./routes";

const modAboutRoute = `${routes.ABOUT}?name=testAboutName`

export const Header = () => {
  const {pathname} = useLocation();

  return pathname === routes.LOGIN ? null : (
    <ul>
      <li>
        <Link to={routes.HOME}>Home</Link>
      </li>
      <li>
        <Link to={routes.LOGIN}>Login</Link>
      </li>
      <li>
        <Link to={routes.PRODUCTS}>Products</Link>
      </li>
      <li>
        <Link to={modAboutRoute}>About</Link>
      </li>
    </ul>
  );
};