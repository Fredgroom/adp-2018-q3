import React, { Component } from 'react';
import './App.css';

const ToDo = ({ number, todo }) => {
  return <li>{number}. {todo}</li>;
}

class App extends Component {
  render() {

    const todos = [
      { id: 0, title: 'Learn React', complete: false },
      { id: 1, title: 'Learn Redux', complete: false },
      { id: 2, title: 'Learn SQL', complete: false }
    ];

    return <div>
      <h1>So Much To Do</h1>
      <div className="todo-list">
        <ul>
          {todos.map((todo, index) =>
            <ToDo key={todo.id} todo={todo.title} number={index + 1}></ToDo>)}
        </ul>
      </div>
    </div>;

  }
}

export default App;
