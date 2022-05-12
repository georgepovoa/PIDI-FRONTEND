import React from 'react';
import styled from 'styled-components';
import arrow from './imgs/arrow.png'



const BtnPerfil = styled.button`
background:none;
border:none;
`;

const DivBtn = styled.div`
    text-align:center;
    width: 50%;
    height:100px;
    background-color: ${props => props.vermelho ? "red" : props => props.azul?"blue":"#00000"};
    margin:35px;

`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;

  color: black;
  margin-bottom:12px;
  margin-top : 5%;
  margin-left : 12px
`;

const Back = styled.img`
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
const BigDiv = styled.div`

display:flex;
flex-direction : column;
align-items: center;
`
const Grande = styled.h1`

margin:auto;
`

const Pequeno = styled.p`

margin:auto;
`

class Planos extends React.Component {
  render() {
    return <>
    <a href='/'><Back src={arrow}></Back></a>
    <Title>Pagamentos</Title>
    <BigDiv >
    <DivBtn vermelho>
    <BtnPerfil><Grande>2X por semana</Grande><br></br> <Pequeno>pequeno</Pequeno> </BtnPerfil>
    </DivBtn>

    <DivBtn azul>
    <BtnPerfil>2X por semana</BtnPerfil>
    </DivBtn>

    <DivBtn>
    <BtnPerfil>2X por semana</BtnPerfil>
    </DivBtn>
    </BigDiv>
    
    </>;
  }
}

export default Planos;