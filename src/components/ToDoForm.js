// src/components/ToDoForm.js
import React, { useState } from 'react';
import { useToDo } from '../context/ToDoContext';

const ToDoForm = () => {
  const { dispatch } = useToDo();
  const [task, setTask] = useState('');

  const handleAddToDo = (e) => {
    e.preventDefault();
    if (task.trim() === '') return;
    dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), task, completed: false } });
    setTask('');
  };

  return (
    <form onSubmit={handleAddToDo}>
      <input
        type="text"
        placeholder="Yapılacakları Yazabilirsiniz..."
        style={{  padding: '15px 155px', margin:'5px'  }}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" style={{ backgroundColor: 'green', color: 'white', margin:'5px' , width:'100px',height:'50px' }}>Ekle</button>
    
    </form>
  );
};

export default ToDoForm;
