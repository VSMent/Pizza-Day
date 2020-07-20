import React from "react";
import {useHistory} from "react-router-dom";
import {routes} from "./routes";

export const LoginPage = () => {
  const history = useHistory();

  const onClick = () => history.push(routes.HOME);

  return (
    <>
      <div>Login page</div>
      <button onClick={onClick}>Go back home</button>
    </>
  );
}