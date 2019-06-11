import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components';

class Navbar extends Component {
  render() {

    const StyledDiv = styled.div`
  
    color: white;
    font-weight: bolder;
    background: #004C99;
    padding: 1vw 20vw 1vw 20vw;
    margin: 
    text-align: left;
    Link:hover, a:active, a:visited { color: orange; }
    `
    
    const StyledLink = styled(Link)`
    float: right;
    text-align: right;
    `

   

    return (
      <StyledDiv>
          <Link to = "/">Home</Link>
          <StyledLink to = "/About">About</StyledLink>
      </StyledDiv>
    );
  }
}

export default Navbar;