import styled from 'styled-components';



export const ModalDiv = styled.div`
position: fixed; 
z-index: 1; 
padding-top: 100px; 
left: 0;
top: 0;
width: 100%; 
height: 100%; 
overflow: auto; 
background-color: rgb(0,0,0); 
background-color: rgba(0,0,0,0.4); `

export const ModalContent = styled.div`
background-color: #fefefe;
margin: auto;
padding: 20px;
border: 1px solid #888;
width: 80%;`

export const ModalClose = styled.span`
color: #aaaaaa;
float: right;
font-size: 28px;
font-weight: bold;
`

export const InputBox = styled.input`
display: block;
margin-right: auto;
margin-left: auto;
border: solid;
border-radius : 15px;
margin-bottom:15px;
padding-top:10px;
padding-bottom : 10px;
text-align: center;
`;