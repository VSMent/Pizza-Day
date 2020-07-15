import React, {useEffect, useState} from "react";
import T from 'prop-types';
import './index.css';

export const Text = ({size, children, onClick, ...props}) => {

  return (
    <div className="text" {...{onClick}} style={{fontSize: size, ...props}}>
      {children}
    </div>
  )
};


Text.propTypes = {
  size: T.string,
  onClick: T.func,
  children: T.oneOfType([T.string, T.node, T.arrayOf(T.node)]).isRequired
}
Text.defaultProps = {
  size: '1em',
  onClick: () => null
}