import React, { useState, useEffect } from 'react';
import logo from "../../../imgs/logo.png";
import {useForm} from 'react-hook-form';
import api from '../../../api/api';
import Cookies from "universal-cookie";

import {
  Logo,
Title,
InputBox,
BtnCadastro,
Obs,
Link
}
from './stylesLogin'

const cookies = new Cookies();




function Login(){
   
  const {register,handleSubmit,formState:{error}} = useForm()

  const [loginErro,setLoginErro] = useState(false)

  const login = async data => {
    const response = await api.post("/auth/login",data)
    console.log(data)
    console.log(response.data)
    if (response.data.status === "Falha"){
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