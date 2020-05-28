import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard'
import PostsPage from './pages/PostsPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/" component={PostsPage}/>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
}

export default App;
