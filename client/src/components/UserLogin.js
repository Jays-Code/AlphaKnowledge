import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import styled from 'styled-components';
//import { StyledButton } from '../style'
import { StyledScrollbox } from '../style'
import { DialogueDiv } from '../style'
import { GenericDiv } from '../style'
import { StyledLabel } from '../style'
import axios from 'axios'


class UserLogin extends React.Component {

    state = {
        loginInfo: {
            username: ''
        }

    }

    handleChange = (event) => {
        const cloneLoggedUser = { ...this.state.loginInfo }
        cloneLoggedUser[event.target.name] = event.target.value
        this.setState({ loginInfo: cloneLoggedUser })

    }


     proceedLogin = (event) => {
         event.preventDefault()
         console.log(this.state.loginInfo.username)
         axios.get(`api/v1/user/username/${this.state.loginInfo.username}`).then(res => {
            this.props.setCurrentUser( res.data )
        })
    }

    // }


    /*
    state = {
        users: [],

        newUser: {
            //username: '',
            //password: ''
        //},

        loginInfo: {
            username: '',
            //password: ''
        },
        redirect: false
    }
    */
    /*
        createUser = (event) => {
            event.preventDefault()
            axios.post('api/v1/user/', {
              username: this.state.newUser.username,
              password: this.state.newUser.password
            }).then(res => {
              const usersList = [...this.state.users]
              usersList.unshift(res.data)
              this.setState({
                newUser: {
                  name: '',
                  password: ''
                },
                users: usersList
              })
      
            })
          }
    */


    // set state of redirect to true with --  .then(() => this.setState({ redirect: true}))
    /*
        getUserList = () => {
            axios.get('api/v1/user').then(res => {
                this.setState({ users: res.data })
            })
        }
    
        componentDidMount = () => {
            this.getUserList()
        }
    
        createUser = (event) => {
            event.preventDefault()
            axios.post('api/v1/user/', {
                username: this.state.newUser.username,
                password: this.state.newUser.password
            }).then(res => {
                const usersList = [...this.state.users]
                usersList.unshift(res.data)
                this.setState({
                    newUser: {
                        name: '',
                        password: ''
                    },
                    users: usersList
                })
    
            })
    
        }
    */
    render() {

        if (this.state.redirect) {
            return <Redirect to='/userdashboard/:id' />;
        }
        return (
            <div>
                <div>
                    {/*
                }
                <div>
                    <h2>Login with a user</h2>
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
                                id="username"
                                type="text"
                                name="username"
                                onChange={this.handleChange}
                                placeholder={this.state.loginInfo.username}
                            />
                        </div>
                        <div>
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>




                {/*
                <div>
                    <h2>Create a new user</h2>
                    <form onSubmit={this.createUser} >
                        <StyledLabel htmlFor="subject">Username: </StyledLabel>
                        <input
                            id="username"
                            input type="text"
                            name="username"
                            onChange={this.handlechange}
                            placeholder={this.state.newUser.username}
                        />
                        <br></br>

                        <StyledLabel>Password: </StyledLabel>
                        <input
                            id="password"
                            input type="text"
                            name="password"
                            onChange={this.handleChange}
                            placeholder={this.state.newUser.password}
                        />

                        <button type="submit">Create</button>
                    </form>
                </div>
                 */}
            </div>
            
                )
               
            }
        
        
        }
        
export default UserLogin;