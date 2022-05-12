import React from 'react';
import styled from 'styled-components';
import profile from './imgs/profile.png'

const BtnPerfil = styled.button`
  
  display: block;
  margin-right: auto;
  margin-left: auto;
  border: solid;
  border-radius : 15px;
  margin-bottom:15px;
  background: ${props => props.verde ? "#10BC10" : props => props.vermelho?"red":"#96CDFF"};
  padding : 7px;
  color : black;
  font-weight:1000;
  font-size:14px;
  width : ${props => props.pequeno ? "35%" : "70%"};
  padding-top:10px;
  padding-bottom : 10px;
  
  
`;

const PerfilImg = styled.img`
  width :55px;
  height: 55px;
  border-radius : 50%;
  margin-top : 8%;

`



const PerfilHeader = styled.div`
  height : 5px;
  display: flex;
  justify-content: center;



`

const Title = styled.h1`
  font-size: 2em;
  text-align: center;

  color: black;
  margin-bottom:12px;
  margin-top : 10%;
  margin-left : 12px
`;

const SubTitle = styled.h2`
  font-size: 1em;
  text-align: center;
  color: #141414;
  opacity:0.6;
  margin-bottom:55px;
  margin-top : 25%;

`;

const Background = styled.div`
  position:fixed;
  width:100%;
  background-color : #1E8AD3;
  height:100%;

`;


class Perfil extends React.Component {
  render() {
    return <>
    <Background>
    <PerfilHeader>
    <PerfilImg src={profile}></PerfilImg>
    <Title>Prof. Pedro</Title>
    


    </PerfilHeader>
    <SubTitle>@Katiness</SubTitle>
    <BtnPerfil verde>Ver alunos e planos ativos</BtnPerfil>
    <BtnPerfil>Editar perfil profissional</BtnPerfil>
    <BtnPerfil verde>Financeiro</BtnPerfil>
    <BtnPerfil>Dados e estastísticas</BtnPerfil>
    <br></br>
    <br></br>
    <BtnPerfil vermelho>Reportar um acontecimento</BtnPerfil>
    <BtnPerfil vermelho>Desativar minha conta</BtnPerfil>
    </Background>
    </>
  }
}

export default Perfil;