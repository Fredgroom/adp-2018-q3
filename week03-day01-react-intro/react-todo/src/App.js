import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {



    const todos = ["React", "Redux", "SQL"];
    return <div>
      <h1>To Do List</h1>
      <ul>
        {todos.map((todo, index) =>
          <li key={index}>{todo}</li>)}
      </ul>
    </div>;

  }
}

export default App;
