# React Meteor Todo

## Resources:

- [React - Meteor Docs](https://guide.meteor.com/react.html)
- [Gist with accounts-ui CSS](https://gist.github.com/mandiwise/29e4be3fbb737b883042ce7c92a87176)

## Refactor/Code-Along Order of Operations

### Basic Set-up

1. `meteor create meteor-react-todo`
2. Look around at what there...
3. `meteor npm install react react-dom` (we'll leave Blaze b/c user accounts...)
4. Copy-pasta React app code:
  - Move `index.js` content to `main.js`
  - Move `index.css` content to `main.css`
  - Create `imports/ui/containers/App` directory and move `App.js` and `App.css` there
  - Rename `App.js` to `index.js` and `App.css` to `styles.css`
  - Update file paths in imports...still broken!
  - Add `import { Meteor } from 'meteor/meteor';` to `main.js`
  - Wrap `ReactDOM.render` in `Meteor.startup(() => {  });` (b/c we don't want to try to render anything to the DOM before Meteor is ready)
  - Boom! It works again!
  - Get them to refactor presentational components out of App component...

### Add a Collection

1. Create first collection in `imports/api/todos.js`
2. Import our new module on the server:
  - Create `imports/start-up/server/register-api.js` and add `import '../../api/todos';`
  - Create `imports/start-up/server/index.js` and add `import './register-api.js';`
  - Replace code in `server/main.js` with `import '/imports/startup/server';`
3. Set up app for React/Meteor integration:
  - Add `meteor add react-meteor-data` to allow React components to respond to data changes via Meteor’s Tracker reactivity system
  - And `meteor npm install --save react-addons-pure-render-mixin` as a dependency for this
4. Import `ToDos` collections and `createContainer` into `App`
  - Wrap `App` component in `createContainer` and add PropType validation
  - Replace `this.state.todos` with `this.props.todos` everywhere
  - It's broken...default props for now with empty array (until we populate DB)
5. Add a todo...
  - Try out the Meteor Mongo shell: `meteor mongo`
  - db.todos.insert({ { id: 0, title: 'Learn React', complete: false } });
  - Weirdness with the `id` fields...let's change it to `_id` (in `App` and `ToDoItem`)
  - Let's remove our manually created ids everywhere!
  - First, let's `meteor reset`, then add new todo without `id`
  - Let's get our start todo back by automatically populating Mongo...
6. Add default todo...
  - Create `imports/server/fixtures.js` and add task on start-up
7. Update existing methods to add/update/delete data from db:
  - Add `ToDos.insert({ ... })` to `addToDo`
  - Add `ToDos.update( ... )` to `toggleComplete`
  - Add `ToDos.remove( ... );` to `removeToDo`
  - Add `ToDos.remove( ... );` to `removeComplete` (need to patch this with a `forEach` until we add a method for this later)

### Add Accounts

1. `meteor add accounts-ui-unstyled accounts-password`
2. Add component as per Meteor docs
3. Import component into `App` and add it in the `render` method...wrap it in a `div` with class of `login-wrapper`
4. We need to hide the todo UI when a user is not logged in, and only show a user's todos to them...
  - Add `currentUser: Meteor.user(),` to `createContainer` in `App`
  - Add `currentUser: PropTypes.object,` to proptypes validationin `App`
  - Wrap todo app components (below `h1`, inside `todo-list`) in `{ this.props.currentUser ? .... : ''` (will need to wrap in new parent div)
  - Wrap everything inside of `render` in `div` with class of `app-wrapper`
  - If your app disappeared (and you're logged out) you're doing something right!
  - Add CSS!
5. Add `owner: currentUserId` to `ToDos.insert` in `addToDo`
6. Update todo list rendering: `todos.filter(todo => todo.owner === currentUserId).map((todo) => ( ... ));`
7. Update our fixtures to create user on start to associate default todo with

### Add Methods / Pub/Sub

1. `meteor remove insecure` (client-side permissions now revoked...can't update our form)
2. Add `Meteor.methods({ ... });` to `imports/api/todos.js`
3. Need to add methods for adding todos, removing todos, removing completed, and toggling completed...
4. Refactor `App` methods to use `Meteor.call()` for each of the new Meteor methods
5. `meteor remove autopublish` (so entire db is no longer available on client!)
6. Todos disappear...need to add `if (Meteor.isServer) { Meteor.publish... }` to `imports/api/todos.js`
7. Now add subscription to `App`: `Meteor.subscribe('todos');` in `createContainer`
