// src/components/ToDoList.js
import React from 'react';
import { useToDo } from '../context/ToDoContext';

const ToDoList = () => {
  const { state, dispatch } = useToDo();

  const handleToggleToDo = (todo) => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo });
  };

  const handleRemoveToDo = (todo) => {
    dispatch({ type: 'REMOVE_TODO', payload: todo });
  };

  return (
    <ul>
      {state.todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleToDo(todo)}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.task}
          </span>
          {/* <button onClick={() => handleRemoveToDo(todo)}>Sil </button> */}
         
          <button onClick={() => handleRemoveToDo(todo)} style={{ backgroundColor: 'red', color: 'white' ,margin: '5px'  }}>  Sil </button>
          
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
