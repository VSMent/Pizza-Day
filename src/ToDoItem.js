import React from "react";
import T from 'prop-types';
import {toDoListPropTypes} from "./propTypes";
import {Checkbox} from "./Checkbox";
import {Icon} from "./Icon";

import './index.css';
import {withCheckedStyles} from "./withCheckedStyles";
import {ToDoText} from "./ToDoText";

export const ToDoItem = withCheckedStyles(
  ({todo, onSwitch, onRemove, onEdit, additionalStyles}) => {
    return (
      <div className='toDoItem'>
        <Checkbox {...{todo, onSwitch}}/>
        <ToDoText size='1.5em' {...{todo, onEdit, additionalStyles}}/>
        <Icon name='remove' onClick={() => onRemove(todo._id)}/>
      </div>
    );
  });

ToDoItem.propTypes = {
  ...toDoListPropTypes,
  onRemove: T.func.isRequired,
  onEdit: T.func.isRequired,
  additionalStyles: T.shape({
    color: T.string,
    textDecoration: T.string
  })
};