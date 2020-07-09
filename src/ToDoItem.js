import React from "react";
import T from 'prop-types';
import {toDoListPropTypes} from "./propTypes";
import {Checkbox} from "./Checkbox";
import {Text} from "./Text";
import {Icon} from "./Icon";

import './index.css';

export const ToDoItem = ({todo, onSwitch, onRemove}) => {
  return (
    <div className='toDoItem'>
      <Checkbox {...{todo, onSwitch}}/>
      <Text size='1.5em'
            textDecoration={todo.completed ? 'line-through' : 'none'}
            color={todo.completed ? 'lightgray' : ''}>
        {todo.text}
      </Text>
      <Icon name='remove' onClick={() => onRemove(todo._id)}/>
    </div>
  );
};

ToDoItem.propTypes = {
  ...toDoListPropTypes,
  onRemove: T.func.isRequired
};