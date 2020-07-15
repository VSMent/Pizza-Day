import React, {useEffect, useReducer} from "react";
import {Text} from "./Text";
import {ToDoInput} from "./ToDoInput";
import {ToDoItem} from "./ToDoItem";
import {initialState, TODOS_ACTIONS, todosReducer} from "./todosReducer";

export const App = () => {
  const [todos, dispatch] = useReducer(todosReducer, initialState());

  const onAdd = text => dispatch({
    type: TODOS_ACTIONS.ADD,
    text
  });

  const onSwitch = _id => dispatch({
    type: TODOS_ACTIONS.SWITCH,
    _id
  });

  const onRemove = _id => dispatch({
    type: TODOS_ACTIONS.REMOVE,
    _id
  });

  useEffect(() => {
    const todosString = JSON.stringify(todos);
    localStorage.setItem('todos', todosString);
  }, [todos]);

  return (
    <div className="application">
      <Text size="2em">Todos</Text>
      <ToDoInput onAdd={onAdd}/>
      <div className='toDoList'>
        {todos.map(
          todo =>
            <ToDoItem
              key={todo._id}
              {...{todo, onSwitch, onRemove}}/>
        )}
      </div>
    </div>
  );
}