
import styled from 'styled-components'


export const Back = styled.img`
position: fixed;
top :75px;
left:7px;
width: 30px;
height: 30px;
border-width:1px;
border-style:solid;
border-radius:50%;
padding:3px;

`;

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: black;
  margin-bottom:12px;
  margin-top:20px;
  
`;

export const SubTitle = styled.h2`
  font-size: 1em;
  text-align: center;
  color: #141414;
  opacity:0.6;
  margin-bottom:12px;

`;

export const InputBox = styled.input`
display: block;
margin-right: auto;
margin-left: auto;
border: solid;
border-radius : 15px;
margin-bottom:15px;
padding-top:10px;
padding-bottom : 10px;

`;

export const SubmitCadastro = styled.button`
  display: block;
  margin-right: auto;
  margin-left: auto;
  border: solid;
  border-radius : 15px;
  margin-bottom:15px;
  background-color : #41a8f5;
  padding-top : 10px;
  padding-bottom : 10px;
  width:45%;

`;

export const Obs = styled.p`
  font-size : 0.7em;

`;

export const Link = styled.a`
  color : orange ; 

`;

export const BtnPersonal = styled.button`

  background: none;
  border:none;
  background-color: ${props => props.ativo ? "#1E8AD3" : "none"};
  border-radius : 20px;
  width:28%;

`

export const BtnAluno = styled.button`

  background: none;
  border:none;
  background-color: ${props => props.ativo ? "#1E8AD3" : "none"};
  border-radius : 20px;
  width:28%;

`

export const BtnArea = styled.div`
display:flex;
width:100%;
justify-content: space-around;
height:35px;
margin-bottom:7px;

`

export const DivOfTags = styled.div`
display:flex;
justify-content:space-around;

`
