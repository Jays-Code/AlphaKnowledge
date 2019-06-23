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
        wolfResponse: {
            result: ''
        },
        //userResponse: '',
    }   
    

    talkToWolfram = () => {
        axios.get('/api/v1/wolfram/').then((res) => {
            this.setState({wolfResponse: res.data})
        }
        )}
    
        componentDidMount = () => {
            this.talkToWolfram()
        }

    render() {
        //console.log(i)
        return (
            <DialogueDiv>
                <h2>Ask Away!</h2>
                <form>
                <span>Enter your question: </span>
                <input id = "question" 
                input type = "text" 
                name= "question"
                placeholder = "What is the diameter of the earth?">
                    
                </input>
                </form>
                <br></br>
                <StyledScrollbox>{this.state.wolfResponse.result}</StyledScrollbox>

            </DialogueDiv>

        )
    }

}

export default TalkToAlpha;