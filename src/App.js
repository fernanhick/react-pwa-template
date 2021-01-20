import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages';
import Signin from './components/Signin';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/app" component={Signin}></Route>
      </Switch>
    </Router>
  );
};

export default App;
