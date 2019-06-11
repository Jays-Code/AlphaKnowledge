import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import styled from 'styled-components';

class About extends Component {
  render() {
    const h4 = styled.h4`
    color: red;
    `
    return (
      <div className="about">
        <h1>AlphaKnowledge is a conversational knowledge app.</h1>
        <h4>---something about AlphaKnowledge---</h4>
      </div>
    );
  }
}

export default About;