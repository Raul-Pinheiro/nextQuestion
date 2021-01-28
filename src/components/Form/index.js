/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import db from '../../../db.json';

// eslint-disable-next-line no-unused-vars
export const Form = styled.form`

    width:100%;
    height:fit-content;
    margin:15px auto;
    padding:5px;
    background-color:${db.theme.colors.tird};

`;

Form.Input = styled.input`

display:flex;
flex-direction:column;
padding:10px;
width:90%;
height:30px;
margin: 20px auto;
outline:none;
border:2px solid transparent;
border-radius:5px;
&::placeholder{
    text-align:center;
    font-family:'Lato', sans-serif;
    font-size:15px;
}
`
Form.Button = styled.button`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:90%;
height:30px;
margin: 20px auto;
text-align:center;
font-family:'Lato', sans-serif;
font-size:15px;
font-weight:bold;
color:white;
outline:none;
border:2px solid transparent;
border-radius:5px;
background-color:#2F4F4F;
&:disabled{
    background-color:#B0C4DE;
    color:black;
    font-weight:bolder;
}

`