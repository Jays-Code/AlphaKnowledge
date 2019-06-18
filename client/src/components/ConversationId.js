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


class ConversationId extends Component {
    state = {
        currentConversation: {
        },
        updatedConversation: {
            question: '',
            answer: ''
        },
        redirect: false
    }

    componentDidMount() {
        axios.get(`/api/v1/conversations/${this.props.id.conversationId}`).then(res => {
            this.setState({ currentConversation: res.data })
            //console.log(this.props.currentUser)
            console.log(this.props.id)
        })
    }

    deleteConversation = () => {
        axios.delete(`/api/v1/conversations/${this.props.id.conversationId}`).then(() =>
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
                <div>{this.state.currentConversation.question}</div>
                <div>{this.state.currentConversation.answer}</div>
            <JustifiedDiv>
             <StyledButton onClick={this.deleteConversation}>Delete this conversation</StyledButton>
             </JustifiedDiv>
             </div>

        )



    }
}

export default ConversationId