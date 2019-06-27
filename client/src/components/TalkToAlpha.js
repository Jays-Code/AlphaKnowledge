import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from 'styled-components';
//import { StyledButton } from '../style'
import { StyledScrollbox } from '../style'
import { DialogueDiv } from '../style'
import { GenericDiv } from '../style'
import { StyledLabel } from '../style'
import axios from 'axios'
//import i from '../../../AlphaKnowledge_app/conversationalApi.py'



class TalkToAlpha extends Component {
    
    state = {
        questionAsked: '',
        wolfResponse: {
            result: ''
        },
        //userResponse: '',
    }
    /*
    componentDidMount = () => {
       
    }
    */
    

    talkToWolfram = (event, askedQuestion) => {
        this.state.questionAsked
        const askedQuestion = this.state.questionAsked
        event.preventDefault()
        //this.setState({questionAsked: askedQuestion})
        console.log(askedQuestion)
        
        axios.get('/api/v1/wolfram/').then((res) => {
            this.setState({wolfResponse: res.data})
        }
        )}
    
    handlechange = (event) => {
        const cloneQuestionAsked = { ...this.state.questionAsked }
        cloneQuestionAsked[event.target.name] = event.target.value
        this.setState({ questionAsked: cloneQuestionAsked })
        //console.log(this.state.questionAsked)
    }

        
    
        

    render() {
        
        console.log(askedQuestion)
        //console.log(i)
        
        return (
            <DialogueDiv>
                <h2>Ask away!</h2>
                <form onSubmit={this.talkToWolfram}>
                <span>Enter your question: </span>
                <input id = "question" 
                input type = "text" 
                name= "question"
                onChange={this.handlechange}
                placeholder = "What is the diameter of the earth?">
                    
                </input>
                <button type="submit">Ask Alpha</button>
                </form>
                <br></br>
                <StyledScrollbox>{this.state.wolfResponse.result}</StyledScrollbox>

            </DialogueDiv>

        )
    }

}

export default TalkToAlpha;