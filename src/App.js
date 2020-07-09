import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {Text} from "./Text";
import {ToDoInput} from "./ToDoInput";
import {ToDoItem} from "./ToDoItem";

export const App = () => {
  const [todos, setTodos] = useState([]);

  const onAdd = text => setTodos([
    ...todos,
    {
      _id: uuidv4(),
      text,
      completed: false
    }
  ]);

  const onSwitch = _id => {
    setTodos(
      todos.map(todo => _id === todo._id ? {...todo, completed: !todo.completed} : todo)
    )
  }

  const onRemove = _id => {
    setTodos(
      todos.filter(todo => _id !== todo._id)
    )
  }

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