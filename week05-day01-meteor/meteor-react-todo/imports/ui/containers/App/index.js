import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";

import { ToDos } from "../../../api/todos";

import AccountsUIWrapper from "../AccountsUIWrapper";
import ToDoInput from "../../components/ToDoInput";
import ToDoItem from "../../components/ToDoItem";
import ToDoCount from "../../components/ToDoCount";
import ClearButton from "../../components/ClearButton";

import "./styles.css";

/**
 * Commented out code below === refactoring what we remove during pub/sub lesson
 */

class App extends Component {
  constructor(props) {
    super(props);

    this.toDoInput = React.createRef();
  }

  addToDo = event => {
    event.preventDefault();

    let toDoInputValue = this.toDoInput.current.value;

    if (toDoInputValue) {
      // ToDos.insert({
      //   title: toDoInputValue,
      //   complete: false,
      //   owner: this.props.currentUserId,
      // });

      Meteor.call("todos.addToDo", toDoInputValue);
      this.toDoInput.current.value = "";
    }
  };

  toggleComplete = todo => {
    // ToDos.update(todo._id, {
    //   $set: { complete: !todo.complete },
    // });

    Meteor.call("todos.toggleComplete", todo);
  };

  removeToDo = todo => {
    // ToDos.remove(todo._id);

    Meteor.call("todo.removeToDo", todo);
  };

  removeCompleted = () => {
    // let todoIds = this.props.todos.filter(todo => todo.complete).map(todo => todo._id);
    // todoIds.forEach((id) => ToDos.remove(id));

    Meteor.call("todo.removeCompleted");
  };

  hasCompleted() {
    let completed = this.props.todos.filter(todo => todo.complete);
    return completed.length > 0 ? true : false;
  }

  render() {
    const { currentUser, currentUserId, todos } = this.props;
    const number = todos.length;

    return (
      <div className="app-wrapper">
        <div className="login-wrapper">
          <AccountsUIWrapper />
        </div>
        <div className="todo-list">
          <h1>So Much To Do</h1>
          {currentUser ? (
            <div>
              <ToDoInput addToDo={this.addToDo} ref={this.toDoInput} />
              <ul>
                {/* {todos.filter(todo => todo.owner === currentUserId).map((todo) => ( */}
                {todos.map(todo => (
                  <ToDoItem
                    key={todo._id}
                    item={todo}
                    toggleComplete={() => this.toggleComplete(todo)}
                    removeToDo={() => this.removeToDo(todo)}
                  />
                ))}
              </ul>
              <div className="todo-admin">
                <ToDoCount number={number} />
                {this.hasCompleted() && (
                  <ClearButton removeCompleted={this.removeCompleted} />
                )}
              </div>
            </div>
          ) : (
            <div className="logged-out-message">
              <p>Please sign in to see your todos.</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
  currentUserId: PropTypes.string
};

App.defaultProps = {
  todos: []
};

export default withTracker(() => {
  Meteor.subscribe("todos");

  return {
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(), // b/c pulling it off above breaks if logged out
    todos: ToDos.find({}).fetch()
  };
})(App);
