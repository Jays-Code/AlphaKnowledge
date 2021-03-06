import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import styled from 'styled-components';
//import { StyledButton } from '../style'
import { StyledScrollbox } from '../style'
import { DialogueDiv } from '../style'
import { GenericDiv } from '../style'
import { StyledLabel } from '../style'
import { StyledLink } from '../style'
import { StyledButton } from '../style'
import { JustifiedDiv } from '../style'
import axios from 'axios'



class TopicId extends Component {
    state = {
        currentTopic: {
        },
        updatedTopic: {
            subject: '',
            notes: ''
        },
        redirect: false
    }

    componentDidMount() {
        axios.get(`/api/v1/topics/${this.props.id.topicId}`).then(res => {
            this.setState({ currentTopic: res.data })
            //console.log(this.props.currentUser)
            console.log(this.props.id)
        })
    }

    handleChange = (e) => {
        const cloneUpdatedTopic = { ...this.state.updatedTopic }
        cloneUpdatedTopic[e.target.name] = e.target.value
        this.setState({ updatedTopic: cloneUpdatedTopic })
    }

    makeTopicUpdate = (e) => {
        e.preventDefault()
        axios.put(`/api/v1/topics/${this.props.id.topicId}/`, {
            subject: this.state.updatedTopic.subject,
            notes: this.state.updatedTopic.notes,
            userId: this.props.topicId
        },
            //console.log(this.state.updatedTopic),
            //console.log("LOG OF this.props.currentUser.userId", this.state.props.userId)
        )
            // .then(res => {
            //     this.setState({ startedProject: res.data })
            .then(() => this.setState({ redirect: true }))
    }
    /*
        componentDidMount = () => {
            axios.get(`/api/v1/topics/${this.props.currentUser}`).then(res => {
                this.setState({ startedProject: res.data })
                console.log(this.props.currentUser)
            })
        }
    
    */
    //  componentDidMount = () => {
    // console.log(this.props.location.state)

    //   }

    deleteTopic = () => {
        axios.delete(`/api/v1/topics/${this.props.id.topicId}`).then(() =>
            this.setState({ redirect: true }));
    }

    
    render() {
        //console.log(this.props.id.topicId)
        //console.log("log of this.props.currentUser", this.props.currentUser)
        //console.log("log of this.props.id", this.props.id)
        //console.log("log of this.currentTopic", this.currentTopic)
        if (this.state.redirect) {
            return <Redirect to={`/userdashboard/${this.props.currentUser.username}`} />
        }
            return (


                <div>
                    <p>{this.state.currentTopic.subject}</p>
                    <p>{this.state.currentTopic.notes}</p>



                    <div>
                        <h2>Update your topic</h2>
                        <form onSubmit={this.makeTopicUpdate} >
                            <StyledLabel htmlFor="subject">Subject:</StyledLabel>
                            <input
                                id="subject"
                                input type="text"
                                name="subject"
                                onChange={this.handleChange}
                                placeholder={this.state.updatedTopic}
                            />
                            <br></br>

                            <StyledLabel>Notes: </StyledLabel>
                            <input
                                id="notes"
                                input type="text"
                                name="notes"
                                onChange={this.handleChange}
                                placeholder={this.state.updatedTopic}
                            />

                            <button type="submit">Update</button>
                        </form>
                        <JustifiedDiv>
                    <StyledButton onClick={this.deleteTopic}>Delete this topic</StyledButton>
                </JustifiedDiv>
                    </div>

                </div>

            )
        }
    }




export default TopicId