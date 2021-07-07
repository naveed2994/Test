import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useDispatch } from 'react-redux';
import Todo from './components/todo';
import { add } from './actions';


const App = () => {
 
  return (
    <div className="App">
     
      <Todo></Todo>
    </div>
  );
}

export default App;
