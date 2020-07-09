import React, {useEffect, useState} from "react";
import T from 'prop-types';
import './index.css';

export const Text = ({size, children, ...props}) => {

  return (
    <div className="text" style={{fontSize: size, ...props}}>
      {children}
    </div>
  )
};


Text.propTypes = {
  size: T.string,
  children: T.oneOfType([T.string, T.node, T.arrayOf(T.node)]).isRequired
}
Text.defaultProps = {
  size: '1em'
}