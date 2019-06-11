import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from 'styled-components';
//import { StyledButton } from '../style'
import { StyledScrollbox } from '../style'
import { DialogueDiv } from '../style'
import { GenericDiv } from '../style'
import axios from 'axios'



class Topics extends Component {
    
    state = {
        error: '',
        topics: []
    }   
    

    getTopics = () => {
        axios.get('/api/v1/topics/').then((res)=> {
            this.setState({topics: res.data})
        })
    }
    componentDidMount(){
        this.getTopics()
    }
    render() {
        return (
            <div>
               Im a topic 
               {this.state.topics.map(topic => {
                   return (
                       <div>
                       <p>{topic.subject}</p>
                       <p>{topic.notes}</p>
                       </div>
                    
                    )
               })}
                <form >
                    <span>Input field for subjects: </span>
                    <input id="subject" input type="text" name="subject"/>
        
                    <span>Input field for notes: </span>
                    <input id="notes" input type="text" name="notes"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Topics;