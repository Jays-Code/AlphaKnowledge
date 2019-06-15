import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from 'styled-components';
//import { StyledButton } from '../style'
import { StyledScrollbox } from '../style'
import { DialogueDiv } from '../style'
import { GenericDiv } from '../style' 



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
    redirect: false
  }



    render() {
        return (
            <div>
               
                <h2>Conversations</h2>
            </div>
        )
    }
}

export default Conversations;