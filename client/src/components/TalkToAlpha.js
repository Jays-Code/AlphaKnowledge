import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from 'styled-components';
//import { StyledButton } from '../style'
import { StyledScrollbox } from '../style'
import { DialogueDiv } from '../style'
import { GenericDiv } from '../style'
import { StyledLabel } from '../style'
import axios from 'axios'
import blueForTalk from '../images/blueForTalk.gif'

const BlueForTalkBackground = styled.div`
background-image: url(${blueForTalk});
height: 95vh;
width: 100vw;

`



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


    talkToWolfram = (event) => {
        //this.state.questionAsked
        //const askedQuestion = this.state.questionAsked
        event.preventDefault()
        //this.setState({questionAsked: askedQuestion})
        //console.log(askedQuestion)
        //console.log(this.state.questionAsked)
        let question = Object.values(this.state.questionAsked)
        console.log(question)

        //UNCOMMENT THIS LINE, DELETE NEXT LINE: axios.get(`/api/v1/wolfram/${question}`).then((res) => {
        axios.get(`/api/v1/wolfram/${question}`).then((res) => {
            console.log(res.data)
            this.setState({ wolfResponse: res.data })
        }
        ).catch((error) => {
            console.log(error)
        })
    }

    handlechange = (event) => {
        const cloneQuestionAsked = { ...this.state.questionAsked }
        cloneQuestionAsked[event.target.name] = event.target.value
        this.setState({ questionAsked: cloneQuestionAsked })
        //console.log(this.state.questionAsked)
    }





    render() {

        //console.log(askedQuestion)
        //console.log(i)

        return (
            <BlueForTalkBackground>
                <DialogueDiv>


                    <h2>Ask away!</h2>
                    <form onSubmit={this.talkToWolfram}>
                        <span>Enter your question: </span>
                        <input id="question"
                            input type="text"
                            name="question"
                            onChange={this.handlechange}
                            placeholder="Type your question here">

                        </input>
                        <button type="submit">Ask Alpha</button>
                    </form>
                    <br></br>
                    <StyledScrollbox>{this.state.wolfResponse.result}</StyledScrollbox>

                </DialogueDiv>
            </BlueForTalkBackground>

        )
    }

}

export default TalkToAlpha;