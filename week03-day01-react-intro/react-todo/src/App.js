import React, { Component } from 'react';

import './App.css';
import { ToDo } from './components/ToDo';
import { ToDoCount } from './components/ToDoCount';
import { ClearButton } from './components/ClearButton';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 0, title: 'Learn React', complete: false },
        { id: 1, title: 'Learn Redux', complete: false },
        { id: 2, title: 'Learn SQL', complete: false }
      ],
      lastID: 0
    };
  }


  toggleComplete(item) {
    const todos = this.state.todos.map((todo) => {
    if (todo.id === item.id) {
      todo.complete = !todo.complete;
    }
  return todo;
    });

  this.setState({ todos});
  }
  
  render() {

    return <div>

      <div className="todo-list">
        <h1>So Much To Do</h1>
        <ul>
          {this.state.todos.map((todo, index) =>
            <ToDo key={todo.id} todo={todo} ordinal={index + 1} toggleComplete={() => this.toggleComplete(todo)}></ToDo>
          )}

        </ul>

        <div className="todo-admin">
          <ToDoCount number={this.state.todos.length} />
          <ClearButton removeCompleted=""></ClearButton>

        </div>

      </div>
    </div>;

  }
}

export default App;
