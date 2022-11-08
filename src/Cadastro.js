import React, { useState } from 'react';

import arrow from './imgs/arrow.png'
import styled from 'styled-components'
import {useForm} from 'react-hook-form';
import api from './api/api';



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





function Cadastro() {
  const [senhaErro,setsenhaErro] = useState(false)

  const cadastrar = async data => {
    if (data.senha != data.confirmarSenha){
      return setsenhaErro(true)
    }
    const response = await api.post("/user",data)
    console.log(data)
    console.log(response.data)
    
   
    return window.location.href = "/";

  }


  const {register,handleSubmit,formState:{error}} = useForm()

    return (<> 
    <a href='/'><Back src={arrow}></Back></a>
    <Title>Cadastro </Title>
    <SubTitle>Entre com seus dados e siga os passos para envio dos documentos</SubTitle>
    {senhaErro?<Obs>Senhas não sãoo iguais . Tente novamente </Obs>:<></>}
  
    <form onSubmit={handleSubmit(cadastrar)}>
    <InputBox placeholder='Nome Completo' name='nome' {...register("nome")}></InputBox>
    <InputBox placeholder = "Data de nascimento" name='dataNascimento' {...register("dataNascimento")}></InputBox>
    <InputBox placeholder = "Endereço de e-mail" name='email' {...register("email")}></InputBox>
    <InputBox placeholder = "Senha" name='senha' {...register("senha")}></InputBox>
    <InputBox placeholder = "Confirmar senha" name='confirmarSenha' {...register("confirmarSenha")}></InputBox>
    
    <SubmitCadastro>Cadastrar</SubmitCadastro>
    </form>
    <br>
    </br>
    <Obs> Já tem uma conta? <Link href='/login'>Clique Aqui ! </Link></Obs>
    

    
    

    </>)
  
}

export default Cadastro;