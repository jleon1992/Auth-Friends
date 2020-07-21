import React, {useState} from 'react';
import PrivateRoute from './components/PrivateRoute'
import './App.css';
import {Switch, Route, BrowserRouter as Router, Link} from 'react-router-dom'
import Public from './components/Public'
import Login from './components/Login'
import FriendList from './components/FriendsList'

function App() {


 
  return (
    <div className="App">
      <Router>
      <Switch>
        <PrivateRoute exact path='/protected' component={FriendList} />
        <Route path='/login' component={Login}  />
        <Route component={Login} />
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
