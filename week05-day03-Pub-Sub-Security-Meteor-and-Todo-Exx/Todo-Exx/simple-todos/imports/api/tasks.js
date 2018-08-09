import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import React, { Component } from 'react';
import { Tasks } from '../api/tasks.js';
 
export default class Task extends Component {
    
    toggleChecked() {
      // Set the checked property to the opposite of its current value
      Tasks.update(this.props.task._id, {
        $set: { checked: !this.props.task.checked },
      });
    }
   
    
    deleteThisTask() {
      Tasks.remove(this.props.task._id);
    }
   
    render() {
      // Give tasks a different className when they are checked off,
      // so that we can style them nicely in CSS
      const taskClassName = this.props.task.checked ? 'checked' : '';
   
      return (
        <li className={taskClassName}>
          <button className="delete" onClick={this.deleteThisTask.bind(this)}>
            &times;
          </button>
   
          <input
            type="checkbox"
            readOnly
            checked={!!this.props.task.checked}
            onClick={this.toggleChecked.bind(this)}
          />
   
          <span className="text">{this.props.task.text}</span>
        </li>
      );
    }
  }
  export const Tasks = new Mongo.Collection('tasks');
 
Meteor.methods({
  'tasks.insert'(text) {
    check(text, String);
 
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }
 
    Tasks.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'tasks.remove'(taskId) {
    check(taskId, String);
 
    Tasks.remove(taskId);
  },
  'tasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);
 
    Tasks.update(taskId, { $set: { checked: setChecked } });
  },
});
