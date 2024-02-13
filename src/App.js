// src/App.js
import React from 'react';
import './App.css';
import { ToDoProvider } from './context/ToDoContext';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

const App = () => {
  return (
    <ToDoProvider>
      <div className="App">
        <header className="App-header">
          <h1>ToDoList Uygulaması</h1> 
        </header>
        <ToDoForm />
        <ToDoList />
      </div>
    </ToDoProvider>
  );
};

export default App;
