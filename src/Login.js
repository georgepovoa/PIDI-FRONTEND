import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from "./imgs/logo.png";
import {useForm} from 'react-hook-form';
import api from './api/api';
import axios from 'axios';
import Cookies from "universal-cookie";

const cookies = new Cookies();


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


function Login(){
   
  const {register,handleSubmit,formState:{error}} = useForm()

  const [loginErro,setLoginErro] = useState(false)

  const login = async data => {
    const response = await api.post("/auth/login",data)
    console.log(data)
    console.log(response.data)
    if (response.data.status == "Falha"){
      return setLoginErro(true)
    }
    cookies.set("TOKEN", response.data.token, {
      path: "/",
    });
    return window.location.href = "/";

  }

  return( <> 
  <Logo src={logo}></Logo>
  <form onSubmit={handleSubmit(login)}>
  <Title> Login </Title>
  {loginErro?<Obs>Senha incorreta. Tente novamente </Obs>:<></>}
  <InputBox placeholder='Usuário/E-mail' name='login' {...register("login")}></InputBox>
  <InputBox type="password" placeholder='Senha' name='senha' {...register("senha")}></InputBox>
  <a href='/'><BtnCadastro preto>Entrar</BtnCadastro></a>
  <Obs>Ainda não possui conta? <Link href='/cadastro'>Criar agora !</Link></Obs>
  <Obs>Ou</Obs>
  <Obs>Entrar com</Obs>
  <BtnCadastro pequeno>Facebook</BtnCadastro>
  <BtnCadastro preto pequeno>Email</BtnCadastro>
  </form>
  
  </>
  )
  
}

export default Login;