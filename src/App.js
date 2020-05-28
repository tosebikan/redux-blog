import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard'
import PostsPage from './pages/PostsPage'
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/posts" component={PostsPage}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
