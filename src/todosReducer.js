import {v4 as uuidv4} from "uuid";

export const TODOS_ACTIONS = {
  ADD: 'add',
  SWITCH: 'switch',
  REMOVE: 'remove'
};

export const initialState = () => JSON.parse(localStorage.getItem('todos')) || [];

export const todosReducer = (todos, action) => {
  switch (action.type) {
    case TODOS_ACTIONS.ADD:
      return [
        ...todos,
        {
          _id: uuidv4(),
          text: action.text,
          completed: false
        }
      ];
    case TODOS_ACTIONS.SWITCH:
      return todos.map(
        todo => action._id === todo._id
          ? {...todo, completed: !todo.completed}
          : todo
      );
    case TODOS_ACTIONS.REMOVE:
      return todos.filter(todo => action._id !== todo._id);
    default:
      throw new Error();
  }
};