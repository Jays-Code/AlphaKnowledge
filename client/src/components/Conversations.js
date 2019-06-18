import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import styled from 'styled-components';
//import { StyledButton } from '../style'
import { StyledScrollbox } from '../style'
import { DialogueDiv } from '../style'
import { GenericDiv } from '../style' 
import { StyledLink } from '../style'
import { StyledLabel } from '../style'
import axios from 'axios'




class Conversations extends Component {
   
   state = {
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
    newConversation: {
        question: '',
        answer: '',
        time: '2019-06-15T21:46:30Z',
        userId: ''
        //TIME IS CURRENTLY HARDCODED AND STATIC.
        // username: 
    },
    redirect: false
  }

    createConversation = (event) => {
        event.preventDefault()
        console.log(this.state.newConversation)
        console.log(this.props.currentUser.id)

        axios.post('/api/v1/conversations/', {
            question: this.state.newConversation.question,
            answer: this.state.newConversation.answer,
            time: this.state.newConversation.time,
            userId: this.props.currentUser.id
           
        })
            .then(res => {
                console.log(this.state.newConversation.question, this.state.newConversation.answer, this.props.currentUser.id )
                this.getConversations()
                this.setState({
                    newConversation: {
                        question: '',
                        answer: '',
                        time: '2019-06-15T21:46:30Z',
                        userId: ''
                    }
                })
            })
    }

    getConversations = () => {
        axios.get('/api/v1/conversations/').then((res) => {
            this.setState({ UserConversations: res.data })
            //console.log(this.state.UserTopics)
        })
    }

    componentDidMount() {
        this.getConversations()
        this.setState({ currentUser: this.props.currentUser })
        console.log(this.props.currentUser)
    }

    handlechange = (event) => {
        const cloneNewConversation = { ...this.state.newConversation }
        cloneNewConversation[event.target.name] = event.target.value
        this.setState({ newConversation: cloneNewConversation })
    }

    render() {

        return (
            <div>
                <h2>Conversations</h2>
                {this.state.currentUser.UserConversations.map((conversation,i) => {
                    return (
                        <div key= {i}>
                            <StyledLink to = {`/userdashboard/${this.props.currentUser.username}/conversation/${conversation.id}`}>{conversation.question}</StyledLink>
                            <StyledLink to = {`/userdashboard/${this.props.currentUser.username}/conversation/${conversation.id}`}>{conversation.answer}</StyledLink>
                        </div>

                    )
                })}
                <form onSubmit={this.createConversation} >
                    <StyledLabel htmlFor="question">Create a question: </StyledLabel>
                    <input
                        id="question"
                        input type="text"
                        name="question"
                        onChange={this.handlechange}
                    //placeholder={this.state.newTopic.subject} 
                    />
                    <br></br>
                    <StyledLabel htmlFor="answer">Create an answer: </StyledLabel>
                    <input
                        id="answer"
                        input type="text"
                        name="answer"
                        onChange={this.handlechange}
                    //placeholder={this.state.newTopic.notes} 
                    />
                    <button type="submit">Add a new conversation</button>
                </form>
            </div>
        )
    }

}

export default Conversations;