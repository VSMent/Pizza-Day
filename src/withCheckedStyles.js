import React from "react";

export const withCheckedStyles = BaseComponent => props => {
  const {todo: {completed}} = props;

  const additionalStyles = completed ? {
    color: 'lightgray',
    textDecoration: 'line-through'
  } : {};

  return <BaseComponent {...{additionalStyles, ...props}}/>
}