import React, { Component } from 'react';

import './App.css';
import { ToDo } from './components/ToDo';
import { ToDoCount } from './components/ToDoCount';
import { ClearButton } from './components/ClearButton';




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
            <ToDo key={todo.id} todo={todo} ordinal={index + 1}></ToDo>
          )}

        </ul>

        <div className="todo-admin">
          <ToDoCount number={todos.length} />
          <ClearButton buttonText=""></ClearButton>
          
        </div>

      </div>
    </div>;

  }
}

export default App;
