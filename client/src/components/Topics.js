import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from 'styled-components';
//import { StyledButton } from '../style'
import { StyledScrollbox } from '../style'
import { DialogueDiv } from '../style'
import { GenericDiv } from '../style'
import { StyledLabel } from '../style'
import axios from 'axios'



class Topics extends Component {
/*
    state = {
        error: '',
        topics: [],

        newTopic: {
            subject: '',
            notes: '',
           // username: 
        }

    }
    */

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
        }
      ],
      newTopic: {
        subject: '',
        notes: '',
       // username: 
    }
    },
    redirect: false
  }



    getTopics = () => {
        axios.get('/api/v1/topics/').then((res) => {
            this.setState({ UserTopics: res.data })
            //console.log(this.state.UserTopics)
        })
    }

    componentDidMount() {
        this.getTopics()
        //console.log(this.state.currentUser)
        this.setState({ currentUser: this.props.currentUser})
        //console.log(this.props.currentUser.UserTopics)
        console.log(this.state.currentUser)
    }

    handlechange = (event) => {
        const cloneNewTopic = { ...this.state.newTopic }
        cloneNewTopic[event.target.name] = event.target.value
        this.setState({ newTopic: cloneNewTopic })
    }

    createTopic = (event) => {
        event.preventDefault()
        axios.post('/api/v1/topics/', {
            subject: this.state.newTopic.subject,
            notes: this.state.newTopic.notes,
            userId: this.props.userId
        })
            .then(res => {
                const topicList = [...this.state.topics]
                topicList.unshift(res.data)
                this.setState({
                    newTopic: {
                        subject: '',
                        notes: ''
                    },
                    topics: topicList
                })
            })
        this.getTopics()
    }


    render() {
     
        return (
            <div>
                <h2>Topics</h2>
                {this.state.currentUser.UserTopics.map(topic => {
                    return (
                        <div>
                            <p>{topic.subject}</p>
                            <p>{topic.notes}</p>
                        </div>

                    )
                })}
                <form onSubmit={this.createTopic} >
                    <StyledLabel htmlFor="subject">Create a subject: </StyledLabel>
                    <input
                        id="subject"
                        input type="text"
                        name="subject"
                        onChange={this.handlechange}
                        //placeholder={this.state.newTopic.subject} 
                        />
                    <br></br>
                    <StyledLabel htmlFor="notes">Create notes: </StyledLabel>
                    <input
                        id="notes"
                        input type="text"
                        name="notes"
                        onChange={this.handleChange}
                       //placeholder={this.state.newTopic.notes} 
                        />
                    <button type="submit">Add a new topic</button>
                </form>
            </div>
        )
    }

}

export default Topics;