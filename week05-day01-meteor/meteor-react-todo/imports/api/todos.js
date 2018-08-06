import { Mongo } from 'meteor/mongo';

// Create todos Mongo collection
export const ToDos = new Mongo.Collection('todos');

// Manage publications
if (Meteor.isServer) {
  Meteor.publish('todos', function todosPublication() {
    return ToDos.find({ owner: this.userId });
  });
}

// Allow client to do these things only...
Meteor.methods({

  'todos.addToDo' (inputValue) {
    if (! this.userId) {
      throw new Meteor.Error('todos.addToDo.not-authorized', 
        'You are not allowed to add to-dos.');
    }

    ToDos.insert({
      title: inputValue,
      complete: false,
      owner: this.userId,
    });
  },

  'todos.toggleComplete' (todo) {
    if (todo.owner !== this.userId) {
      throw new Meteor.Error('todos.toggleComplete.not-authorized',
        'You are not allowed to update to-dos for other users.');
    }

    ToDos.update(todo._id, {
      $set: { complete: !todo.complete },
    });
  },

  'todo.removeToDo' (todo) {
    if (todo.owner !== this.userId) {
      throw new Meteor.Error('todos.todo.removeToDo.not-authorized',
        'You are not allowed to remove to-dos for other users.');
    }

    ToDos.remove(todo._id);
  },

  'todo.removeCompleted' () {
    if (! this.userId) {
      throw new Meteor.Error('todos.removeCompleted.not-authorized',
        'You are not allowed to remove to-dos for other users.');
    }

    ToDos.remove({ owner: this.userId, complete: true });
  },

});
