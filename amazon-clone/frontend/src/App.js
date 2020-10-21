import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/register">
              <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
