import React, {useState} from "react";
import {Text} from "./Text";
import {ToDoInput} from "./ToDoInput";

export const ToDoText = ({todo, onEdit, additionalStyles}) => {
  const [isEditable, setIsEditable] = useState(false);

  const onClick = () => todo.completed ? null : setIsEditable(true);
  const onSaveChanges = text => {
    setIsEditable(false);
    onEdit({...todo, text});
  }

  return isEditable
    ? <ToDoInput initialValue={todo.text} onAdd={onSaveChanges}/>
    : <Text size='1.5em' {...additionalStyles} onClick={onClick}>
      {todo.text}
    </Text>;
};