import React from 'react';
import arrow from './imgs/arrow.png'
import styled from 'styled-components'


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

const Title = styled.h1`
  font-size: 2em;
  text-align: center;

  color: black;
  margin-bottom:12px;
  margin-top:20px;
`;

const SubTitle = styled.h2`
  font-size: 1em;
  text-align: center;

  color: #141414;
  opacity:0.6;
  margin-bottom:12px;

`;

const InputBox = styled.input`
display: block;
margin-right: auto;
margin-left: auto;
border: solid;
border-radius : 15px;
margin-bottom:15px;
padding-top:10px;
padding-bottom : 10px;
`;

const SubmitCadastro = styled.button`
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

const Obs = styled.p`
  font-size : 0.7em;

`;

const Link = styled.a`
  color : orange ; 

`;





class Cadastro extends React.Component {
  render() {
    return<> 
    
    <a href='/'><Back src={arrow}></Back></a>
    <Title>Cadastro </Title>
    <SubTitle>Entre com seus dados e siga os passos para envio dos documentos</SubTitle>

    <InputBox placeholder='Nome Completo'></InputBox>
    <InputBox placeholder = "Endereço de e-mail"></InputBox>
    <InputBox placeholder = "CPF"></InputBox>
    <InputBox placeholder = "RG"></InputBox>
    <InputBox placeholder = "Data de nascimento"></InputBox>
    <InputBox placeholder = "Endereço completo"></InputBox>
    <SubmitCadastro>Cadastrar</SubmitCadastro>
    <br>
    </br>
    <Obs> Já tem uma conta? <Link href='/login'>Clique Aqui ! </Link></Obs>
    

    
    

    </>
  }
}

export default Cadastro;