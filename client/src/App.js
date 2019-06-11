//import React from 'react';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import UserLogin from "./components/UserLogin"
import Navbar from "./components/Navbar";
import TalkToAlpha from "./components/TalkToAlpha";
import About from "./components/About"
//import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        react app client        
        <Router>
          <Navbar></Navbar>
        {<Switch>
          <Route exact path = "/Login" component = {UserLogin}/>
          <Route path = "/TalkToAlpha" component = {TalkToAlpha}/>
          <Route path = "/About" component = {About}/>
        </Switch>}
        </Router>
      </header>
    </div>
  );
}

export default App;
