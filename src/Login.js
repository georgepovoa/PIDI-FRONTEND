import React from 'react';
import styled from 'styled-components';
import logo from "./imgs/logo.png"

const Logo = styled.img`
  width : 100%;
  height : 30%;
  margin-bottom:25px;
  
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;

  color: black;
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

const BtnCadastro = styled.button`
  
  display: block;
  margin-right: auto;
  margin-left: auto;
  border: solid;
  border-radius : 15px;
  margin-bottom:15px;
  background: ${props => props.preto ? "black" : "blue"};
  padding : 7px;
  color : white;
  width : ${props => props.pequeno ? "35%" : "48%"};
  padding-top:10px;
  padding-bottom : 10px;
  text-decooration:none;
  
`;

const Obs = styled.p`
text-align : center;
  font-size : 0.7em;

`;

const Link = styled.a`
  color : orange ; 

`;


class Login extends React.Component {
  render() {
    return <> 
    <Logo src={logo}></Logo>
    <Title> Login </Title>
    <InputBox placeholder='Usuário/E-mail'></InputBox>
    <InputBox type="password" placeholder='Senha'></InputBox>
    <a href='/'><BtnCadastro preto>Entrar</BtnCadastro></a>
    <Obs>Ainda não possui conta? <Link href='/cadastro'>Criar agora !</Link></Obs>
    <Obs>Ou</Obs>
    <Obs>Entrar com</Obs>
    <BtnCadastro pequeno>Facebook</BtnCadastro>
    <BtnCadastro preto pequeno>Email</BtnCadastro>
    
    </>
  }
}

export default Login;