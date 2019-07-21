import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import Particles from 'react-particles-js'
import styled from 'styled-components';
import { AboutWrapper } from '../style'
import { AboutInfo } from '../style'



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
        <AboutWrapper>
          <AboutInfo>

            <h1>AlphaKnowledge is a conversational knowledge app.</h1>
            <h4>---something about AlphaKnowledge---</h4>
            <h3>If you're just here to play with the bubbles, we don't blame you. 😉 </h3>
          </AboutInfo>
        
        <Canvas>
          <Particles
            params={{
              "particles": {
                "number": {
                  "value": 640,
                  "density": {
                    "enable": false
                  }
                },
                "size": {
                  "value": 8,
                  "random": true,
                  "anim": {
                    "speed": 2,
                    "size_min": 0.3
                  }
                },
                "line_linked": {
                  "enable": false
                },
                "move": {
                  "random": true,
                  "speed": 2.5,
                  "direction": "top",
                  "out_mode": "out"
                }
              },
              "interactivity": {
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "bubble"
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
                    "distance": 125,
                    "duration": 1.5
                  }
                }
              }
            }} />
        </Canvas>
        </AboutWrapper>
      </div>
    );

  }
}

export default About;