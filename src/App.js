import React, {useEffect, useReducer} from "react";
import {Text} from "./Text";
import {ToDoInput} from "./ToDoInput";
import {ToDoItem} from "./ToDoItem";
import {useTodosHook} from "./useTodosHook";
import {TodosContext} from "./TodosContext";

export const App = () => {

  const {
    todos,
    onAdd,
    onSwitch,
    onEdit,
    onRemove
  } = useTodosHook();

  return (
    <div className="application">
      <Text size="2em">Todos</Text>
      <ToDoInput onAdd={onAdd}/>
      <TodosContext.Provider value={todos}>
        <div className='toDoList'>
          {todos.map(
            todo =>
              <ToDoItem
                {...{key: todo._id, todo, onSwitch, onEdit, onRemove}}/>
          )}
        </div>
      </TodosContext.Provider>
    </div>
  );
}