import React from 'react';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
//import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path = "/" component = {UserLogin}/>
        </Switch>
      </header>
    </div>
  );
}

export default App;
