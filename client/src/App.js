//import React from 'react';
import React, { Component } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import UserLogin from "./components/UserLogin"
import Navbar from "./components/Navbar";
import TalkToAlpha from "./components/TalkToAlpha";
import About from "./components/About"
import UserDashboard from "./components/UserDashboard"
import { DialogueDiv } from './style'
//import './App.css';




class App extends Component {

  state = {
    users: [],

    newUser: {
      username: '',
      password: ''
    },

    loginInfo: {
      username: '',
      //password: ''
    },
    redirect: false
  }


  //proceedLogin = (event) => {
   // this.state.loginInfo.username

    // }
    // set state of redirect to true with --  .then(() => this.setState({ redirect: true}))

    getUserList = () => {
      axios.get('api/v1/user').then((res) => {
        this.setState({ users: res.data })
        console.log(res.data)
      })
    }

    componentDidMount = () => {
      this.getUserList()
    }

    

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Navbar></Navbar>
            {<Switch>
              <Route exact path="/" component={UserLogin} />
              <Route exact path="/About" component={About} />
              <Route exact path="/UserDashboard/:id" component={UserDashboard} />
              <Route exact path="/TalkToAlpha" component={TalkToAlpha} />
            </Switch>}
          </Router>
        </header>
      </div>
    );
  }
}
export default App;
