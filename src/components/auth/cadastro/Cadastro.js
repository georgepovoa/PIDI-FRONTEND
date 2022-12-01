import React, { useState } from 'react';

import arrow from '../../../imgs/arrow.png'
import {useForm} from 'react-hook-form';
import api from '../../../api/api';

import {
  Back,
  Title,
  SubTitle,
  InputBox,
  SubmitCadastro,
  Obs,
  Link
} from './stylesCadastro'








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