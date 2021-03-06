import styled from 'styled-components';
import { Link } from 'react-router-dom'


export const StyledLink = styled(Link)`
text-decoration: none;

`

export const StyledButton = styled.button`
background: white;
border-radius: 10px;
border: 2px outset #4CAF50;
color: purple;
margin: 2em 1em;
padding: 0.25em 1em;
`

export const StyledLabel = styled.label`
text-decoration: bold;
font-style: oblique;
`

export const StyledScrollbox = styled.div`
height:20vh;
width:50vw;
overflow:scroll;
border:9px inset orange;
position: relative;
margin: auto;
`
export const DialogueDiv = styled.div`
background:white;
text-align: center;
border: solid black;
`

export const GenericDiv = styled.div`
background:white;
text-align: center;
border: solid black;
position: relative;
margin: auto;
`

export const JustifiedDiv = styled.div`
display: flex;
justify-content: center;
background: green;
border: solid white;
`
export const InlineDiv = styled.div`
display: flex;
justify-content: center;
background: #b81239
border: solid black;
`