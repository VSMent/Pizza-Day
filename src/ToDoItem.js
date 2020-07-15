import React from "react";
import T from 'prop-types';
import {toDoListPropTypes} from "./propTypes";
import {Checkbox} from "./Checkbox";
import {Text} from "./Text";
import {Icon} from "./Icon";

import './index.css';
import {withCheckedStyles} from "./withCheckedStyles";

export const ToDoItem = withCheckedStyles(
  ({todo, onSwitch, onRemove, additionalStyles}) => {
    return (
      <div className='toDoItem'>
        <Checkbox {...{todo, onSwitch}}/>
        <Text size='1.5em' {...additionalStyles}>
          {todo.text}
        </Text>
        <Icon name='remove' onClick={() => onRemove(todo._id)}/>
      </div>
    );
  });

ToDoItem.propTypes = {
  ...toDoListPropTypes,
  onRemove: T.func.isRequired,
  additionalStyles: T.shape({
    color: T.string,
    textDecoration: T.string
  })
};