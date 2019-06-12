import React from 'react';
import { Redirect, Link } from 'react-router-dom'
import { StyledLabel } from '../style'


class UserLogin extends React.Component {

    state = {
        loginInfo: {
            username: '',
            password: ''
        },
        redirect: false
    }

    proceedLogin = (event) => {

    }
    // set state of redirect to true with --  .then(() => this.setState({ redirect: true}))
    render() {

        if (this.state.redirect) {
            return <Redirect to='/userdashboard' />;
        }
        return (
            
            <div>
                <p>Login Component</p>
                <form onSubmit={this.proceedLogin} >
                    <StyledLabel htmlFor="subject">Username: </StyledLabel>
                    <input
                        id="username"
                        input type="text"
                        name="username"
                        onChange={this.handlechange}
                        placeholder={this.state.loginInfo.username}
                    />
                    <br></br>
                    <StyledLabel>Password: </StyledLabel>
                    <input
                        id="password"
                        input type="text"
                        name="password"
                        onChange={this.handleChange}
                        placeholder={this.state.loginInfo.password}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }

}

export default UserLogin;