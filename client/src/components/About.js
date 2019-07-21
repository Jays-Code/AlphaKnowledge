import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import Particles from 'react-particles-js'
import styled from 'styled-components';
import { Wrapper } from '../style'


const Canvas = styled.div`
background:#b81239;
`

class About extends Component {
  render() {
    const h4 = styled.h4`
    color: red;
    `
    return (
      <div>
        <Wrapper>
          <div className="about">

            <h1>AlphaKnowledge is a conversational knowledge app.</h1>
            <h4>---something about AlphaKnowledge---</h4>
            <h3>If you're just here to play with the bubbles, we don't blame you. 😉 </h3>
          </div>
        </Wrapper>
        <Canvas>
          <Particles
            params={{
              "particles": {
                "number": {
                  "value": 160,
                  "density": {
                    "enable": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "speed": 4,
                    "size_min": 0.3
                  }
                },
                "line_linked": {
                  "enable": false
                },
                "move": {
                  "random": true,
                  "speed": 1,
                  "direction": "top",
                  "out_mode": "out"
                }
              },
              "interactivity": {
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "bubble"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "repulse"
                  }
                },
                "modes": {
                  "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
                  },
                  "repulse": {
                    "distance": 400,
                    "duration": 4
                  }
                }
              }
            }} />
        </Canvas>
      </div>
    );

  }
}

export default About;