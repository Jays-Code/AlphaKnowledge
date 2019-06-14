import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from 'styled-components';
//import { StyledButton } from '../style'
import { StyledScrollbox } from '../style'
import { DialogueDiv } from '../style'
import { GenericDiv } from '../style'
import { JustifiedDiv } from '../style'
import { InlineDiv } from '../style'
import { StyledLink } from '../style'
import Conversations from '../components/Conversations'
import Topics from '../components/Topics'





class UserDashboard extends Component {
    /*
    state = {
        error: '',
    }   
    */


    render() {
        console.log(this.props.currentUser);
        return (
            <div>
                <div>
                    <JustifiedDiv>
                        <h1>User Dashboard</h1>
                    </JustifiedDiv>
                    {/*</div> <DialogueDiv><Link to="/conversations">Conversations</Link></DialogueDiv>
                    <DialogueDiv><Link to="/topics">Topics</Link></DialogueDiv>*/}
                </div>
                <InlineDiv>
                    <Topics userId={ this.props.currentUser }/>
                    <Conversations userId={ this.props.currentUser }/>
                </InlineDiv>
                <br></br>
                <JustifiedDiv>
                    <StyledLink to="/TalkToAlpha">Talk to Alpha!</StyledLink>
                </JustifiedDiv>


                {/* <div>
                    <Router>
                        {<Switch>
                            <Route path="/conversations" component={Conversations} />
                            <Route path="/topics" component={Topics} />
                        </Switch>}
                    </Router>
                </div>
              */}
            </div>
        )
    }
}

export default UserDashboard;