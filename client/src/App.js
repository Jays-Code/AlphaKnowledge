//import React from 'react';
import React, { Component } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import UserLogin from "./components/UserLogin"
import Navbar from "./components/Navbar";
import TalkToAlpha from "./components/TalkToAlpha";
import About from "./components/About"
import UserDashboard from "./components/UserDashboard"
import TopicId from "./components/TopicId"
import { DialogueDiv } from './style'
//import './App.css';




class App extends Component {

  state = {

    newUser: {
      username: '',
      password: ''
    },

    currentUser: {
      username: '',
      password: '',
      UserConversations: [
        {
          question: '',
          answer: '',
          time: '',
          username: '',
        }
      ],
      UserTopics: [
        {
          subject: '',
          notes: '',
          username: ''
        },
      ]
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

  setCurrentUser = (currentUser) => {
    this.setState({ currentUser })
  }




  render() {

    let showUserLogin = () => (<UserLogin setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser}/>)
    let showUserDashboard = () => (<UserDashboard currentUser={this.state.currentUser} />)
    let showTalkToAlpha = () => (<TalkToAlpha currentUser={this.state.currentUser}/>)
    let showUserTopic = ({match}) => (<TopicId id = {match.params} topicId currentUser = {this.state.currentUser}/>)

    return (
      
      <div className="App">
        <header className="App-header">
          <Router>
            <Navbar></Navbar>
            {<Switch>
              <Route exact path="/" render={showUserLogin} />
              <Route exact path="/About" component={About} />
              <Route exact path="/UserDashboard/:id" render={showUserDashboard} />
              <Route exact path="/UserDashboard/:id/:topicId" render={showUserTopic} />
              <Route exact path="/TalkToAlpha" render={showTalkToAlpha} />
            </Switch>}
          </Router>
        </header>
      </div>
    );
  }
}
export default App;
