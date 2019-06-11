import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from 'styled-components';
//import { StyledButton } from '../style'
import { StyledScrollbox } from '../style'
import { DialogueDiv } from '../style'
import { GenericDiv } from '../style' 



class Topics extends Component {
    /*
    state = {
        error: '',
    }   
    */


    render() {
        return (
            <div>
               
                <form>
                    <span>Input field for subjects: </span>
                    <input id="subject" input type="text" name="subject"></input>
                </form>
                <br></br>
                <form>
                    <span>Input field for notes: </span>
                    <input id="notes" input type="text" name="notes"></input>
                </form>
            </div>
        )
    }
}

export default Topics;