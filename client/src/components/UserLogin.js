import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import styled from 'styled-components';
//import { StyledButton } from '../style'
import { StyledScrollbox, LoginWrapper, StyledButton } from '../style'
import { DialogueDiv } from '../style'
import { GenericDiv } from '../style'
import { StyledLabel } from '../style'
import axios from 'axios'
import Particles from 'react-particles-js'
import blueForTalk from '../images/blueForTalk.gif'

const PinkBlueGradient = styled.div`
//background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,68,121,0.6895351890756303) 37%, rgba(0,212,255,1) 100%);
background: linear-gradient(to right, rgb(203, 52, 181), rgb(68, 166, 187));
//height:100vh;
//width:100vw;
//position: absolute;
z-index:1;
`
class UserLogin extends React.Component {

    state = {
        loginInfo: {
            loginUsername: ''
        },
        newUser: {
            username: '',
            password: ''
        },
        redirect: false
    }

    handleChangeLogin = (event) => {
        const cloneLoggedUser = { ...this.state.loginInfo }
        cloneLoggedUser[event.target.name] = event.target.value
        this.setState({ loginInfo: cloneLoggedUser })

    }

    handleChangeNewUser = (event) => {
        const cloneNewUser = { ...this.state.newUser }
        cloneNewUser[event.target.name] = event.target.value
        this.setState({ newUser: cloneNewUser })
    }

    proceedLogin = (event) => {
        event.preventDefault()
        //console.log(this.state.loginInfo.loginUsername)
        axios.get(`api/v1/user/username/${this.state.loginInfo.loginUsername}`).then(res => {
            this.props.setCurrentUser(res.data)
        }).then(res => {
            this.setState({ redirect: true })
        })
    }

    createUser = (event) => {
        event.preventDefault()
        axios.post('api/v1/user/', {
            username: this.state.newUser.username,
            password: this.state.newUser.password
        }).then(res => {
            // const usersList = [...this.state.users]
            // usersList.unshift(res.data)
            this.setState({
                newUser: {
                    username: '',
                    password: ''
                },
                // users: usersList
            })

        })
    }


    render() {
        //console.log("from userLogin", this.props.currentUser.id)
        if (this.state.redirect) {
            return <Redirect to={`/userdashboard/${this.props.currentUser.username}`} />;
        }
        return (
            <PinkBlueGradient>
                <LoginWrapper>
                <DialogueDiv>
                    
                    <h2>Login with a user</h2>
                    
                        {/*
                }
                <div>
                    
                    {this.state.users.map((user, index) => {
                        return (
                            <div key={index}>
                                <Link to={{ pathname: `userdashboard/${user.username}`, user: user }}>{user.username}</Link>
                            </div>
                        )
                    })

                    }
                */}

                        <form onSubmit={this.proceedLogin}>
                            <div>
                                <StyledLabel htmlFor="username">Username: </StyledLabel>
                                <input
                                    id="loginUsername"
                                    type="text"
                                    name="loginUsername"
                                    onChange={this.handleChangeLogin}
                                    placeholder={this.state.loginInfo.loginUsername}
                                />
                            </div>
                            <div>
                                <StyledButton type="submit" value="Login">Login</StyledButton>
                            </div>
                        </form>
                    





                    <div>
                        <h2>Create a new user</h2>
                        <form onSubmit={this.createUser} >
                            <StyledLabel htmlFor="subject">Username: </StyledLabel>
                            <input
                                id="username"
                                input type="text"
                                name="username"
                                onChange={this.handleChangeNewUser}
                                placeholder={this.state.newUser.username}
                            />
                            <br></br>

                            <StyledLabel>Password: </StyledLabel>
                            <input
                                id="password"
                                input type="text"
                                name="password"
                                onChange={this.handleChangeNewUser}
                                placeholder={this.state.newUser.password}
                            />

                            <StyledButton type="submit">Create</StyledButton>
                        </form>
                    </div>
                    
                </DialogueDiv>
                </LoginWrapper>
                <Particles
                        params={{
                            particles: {
                                number: {
                                    value: 70
                                },
                                line_linked: {
                                    shadow: {
                                        enable: true,
                                        color: "#3CJ9D1",
                                        blur: 5
                                    }
                                }
                            }
                        }}
                        style={{
                            width: '100%',
                        }}
                    />
            </PinkBlueGradient>


        )

    }


}

export default UserLogin;