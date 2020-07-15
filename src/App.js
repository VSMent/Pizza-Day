import React, {useEffect, useReducer} from "react";
import {Text} from "./Text";
import {ToDoInput} from "./ToDoInput";
import {ToDoItem} from "./ToDoItem";
import {useTodosHook} from "./useTodosHook";

export const App = () => {

  const {todos, onAdd, onSwitch, onRemove} = useTodosHook();

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