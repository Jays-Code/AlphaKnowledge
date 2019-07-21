import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const AboutWrapper = styled.div`
text-align:center;
background: rgb(86,82,148);
background: linear-gradient(90deg, rgba(86,82,148,1) 2%, rgba(70,201,22,0.7623643207282913) 10%, rgba(138,221,224,1) 62%, rgba(0,212,255,1) 72%);
`

export const AboutInfo = styled.div`
	opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 2s;


@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`
export const LoginWrapper = styled.div`
text-align:center;
margin: 0 auto;

`



export const StyledLink = styled(Link)`
text-decoration: none;

`

export const StyledButton = styled.button`
background: #3498db;
background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
background-image: -moz-linear-gradient(top, #3498db, #2980b9);
background-image: -ms-linear-gradient(top, #3498db, #2980b9);
background-image: -o-linear-gradient(top, #3498db, #2980b9);
background-image: linear-gradient(to bottom, #3498db, #2980b9);
-webkit-border-radius: 12;
-moz-border-radius: 12;
border-radius: 12px;
font-family: Arial;
color: #ffffff;
font-size: 15px;
padding: 5px 10px 5px 10px;
text-decoration: none;
`

export const StyledLabel = styled.label`
text-decoration: bold;
font-style: oblique;
`

export const StyledScrollbox = styled.div`
height:20vh;
width:50vw;
overflow:scroll;
border:9px inset #b81239;
position: relative;
margin: auto;
background:white;
`
export const DialogueDiv = styled.div`
background:silver;
text-align: center;
border: solid black;
position: relative;
margin:auto;
z-index:5;
color:#b81239;
width: 50vw;
border-radius: 25px;
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
border: solid black 1vw;
//margin:200px auto; 
padding: 5vw 23vh;
justify-content: space-between;
`

export const TalkToWolfDiv = styled.div`
//padding: 1vw 100vh;
//background: #b81239
`




