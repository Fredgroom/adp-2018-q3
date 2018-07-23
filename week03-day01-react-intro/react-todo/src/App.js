import React, { Component } from 'react';
import './App.css';

const ToDo = ({ordinal, todo}) => {
  return <li>{ordinal}. {todo}</li>;
}

class App extends Component {
  render() {

    const todos = ["React", "Redux", "SQL"];
    return <div>
      <h1>Todos</h1>
      <div className="todo-list">
      <ul>
        {todos.map((todo, index) =>
          <ToDo key={index} todo={todo} ordinal={index+1}></ToDo>)}
      </ul>
      </div>
    </div>;

  }
}

export default App;
