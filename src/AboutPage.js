import React from "react";
import {useLocation} from "react-router-dom";

export const AboutPage = () => {
  const {search} = useLocation();
  const name = "name";
  const value = new URLSearchParams(search).get(name);

  return (
    <>
      <div>About page</div>
      <div>Search name -> {name}, value -> {value}</div>
    </>
  );
}