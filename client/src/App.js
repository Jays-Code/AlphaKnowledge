//import React from 'react';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import UserLogin from "./components/UserLogin"
import Navbar from "./components/Navbar";
import TalkToAlpha from "./components/TalkToAlpha";
import About from "./components/About"
import UserDashboard from "./components/UserDashboard"
import { DialogueDiv } from './style'
//import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <Router>
          <Navbar></Navbar>
        {<Switch>
          <Route exact path = "/" component = {UserLogin}/>
          <Route exact path = "/About" component = {About}/>
          <Route exact path = "/UserDashboard/:id" component = {UserDashboard}/>
          <Route exact path = "/TalkToAlpha" component = {TalkToAlpha}/>
        </Switch>}
        </Router>
      </header>
    </div>
  );
}

export default App;
