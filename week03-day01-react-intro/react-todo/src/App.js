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
        { id: 1, title: 'Conquer the world', complete: false },
        { id: 2, title: 'Have a little rest', complete: false }
      ],
      lastId: 0
    };
    this.toDoInput = React.createRef();
  }

  componentDidMount() {
    this.toDoInput.current.focus();
  }

  toggleComplete(item) {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === item.id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });

    this.setState({ todos });
  }

  removeToDo(item) {
    const todos = this.state.todos.filter((todo) => todo.id !== item.id);

    this.setState({ todos });
  }

  removeCompleted() {
    const todos = this.state.todos.filter((todo) => !todo.complete);

    this.setState({ todos });
  }

  hasCompleted() {
    const completedTodos = this.state.todos.filter((todo) => todo.complete);


    return completedTodos.length > 0;
  }

  addToDo(event) {
    event.preventDefault();
    let toDoInput = this.toDoInput.current;
    if (toDoInput) {
      const id = this.state.lastId + 1; // update id
      const newTodos = [
        ...this.state.todos,
        { id, title: toDoInput.value, complete: false }
      ];
      this.setState({
        todos: newTodos,
        lastId: id
      });
      toDoInput.value = "";
    }
  };

  render() {
    return (
      <div>
        <div className="todo-list">
          <h1>So much to do</h1>
          <div className="add-todo">
            <form name="addTodo" onSubmit={this.addToDo.bind(this)}>
              <input type="text" ref={this.toDoInput} />
              <span>(press enter to add)</span>
            </form>
          </div>
          <ul>
            {this.state.todos.map((todo, index) =>
              <ToDo
                key={todo.id}
                todo={todo}
                ordinal={index + 1}
                toggleComplete={() => this.toggleComplete(todo)}
                removeToDo={() => this.removeToDo(todo)}></ToDo>)}
          </ul>
          <div className="todo-admin">
            <ToDoCount number={this.state.todos.length}></ToDoCount>
            <ClearButton removeCompleted={this.removeCompleted.bind(this)}></ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;