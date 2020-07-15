import {useEffect, useReducer} from "react";
import {initialState, TODOS_ACTIONS, todosReducer} from "./todosReducer";

export const useTodosHook = () => {
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
  return {
    todos,
    onAdd,
    onSwitch,
    onRemove
  }
};