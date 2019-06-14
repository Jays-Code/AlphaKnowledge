import React, { Component } from 'react';
import styled from 'styled-components';
//import { StyledButton } from '../style'
import { StyledScrollbox } from '../style'
import { DialogueDiv } from '../style'



class TalkToAlpha extends Component {
    /*
    state = {
        error: '',
    }   
    */





    render() {
        return (
            <DialogueDiv>
                <h2>Ask Away!</h2>
                <form>
                <span>Enter your question: </span>
                <input id = "question" input type = "text" name= "question"></input>
                </form>
                <br></br>
                <StyledScrollbox>Conversation text with API goes here</StyledScrollbox>

            </DialogueDiv>

        )
    }

}

export default TalkToAlpha;