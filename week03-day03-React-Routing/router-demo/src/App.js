import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Home = () => <h1>Hello, World!</h1>;
const Contact = () => <h1>Get in touch!</h1>;
const NotFound = () => <h1>Whoops. You broke the internet again.</h1>;
const NavBar = () => (
  <div>
    <NavLink to="/" exact activeClassName="selected">Home</NavLink>
    &nbsp;
    <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
    &nbsp;
    <NavLink to="/posts" activeClassName="selected">Posts</NavLink>
    &nbsp;
    <NavLink to="/whoops" activeClassName="selected">Breakage!</NavLink>
  </div>
);
const Posts = ({ match }) => (
  <div>
    <h1>Blog</h1>
    <NavLink to={`${match.url}`} exact activeClassName="selected">Main</NavLink>
    &nbsp;
    <NavLink
      to={`${match.url}/hello-world`} activeClassName="selected">Hello</NavLink>
    &nbsp;
    <NavLink to={`${match.url}/scram-world`} activeClassName="selected">Scram</NavLink>

    <Route
      path={`${match.url}/:postName`}
      render={({ match }) => <h2>{match.params.postName}</h2>}
    />
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/posts" component={Posts} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;