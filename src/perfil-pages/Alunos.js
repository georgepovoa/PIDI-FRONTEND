import React from 'react';
import styled from 'styled-components';
import profile from '../imgs/profile.png'

const PerfilImg = styled.img`
  width :35px;
  height: 35px;
  border-radius : 50%;
  margin-top : 7%;
  margin-left:7px;

`

const Background = styled.div`
  position:fixed;
  width:100%;
  background-color : #1E8AD3;
  height:100%;
  overflow:auto;

`;

const Pefildiv = styled.div`
  display: flex;
  background-color :  #1E8AF1;
  margin-bottom:15px
  

`;


const PerfilTxt = styled.div`
  margin-left:15px;
  

`;
const Link = styled.a`
  color : orange ; 

`;

function Aluno(props) {
  return <>
    <Pefildiv>
    <PerfilImg src = {profile}></PerfilImg>
    <PerfilTxt>
    <p>Nome : {props.nome}</p>
    <p>{props.idade} Anos </p>
    <p>Status : {props.status}</p>
    <p><Link>mais info... </Link></p>
    </PerfilTxt>
    
    </Pefildiv>
    </>
  }


class Alunos extends React.Component {
  render() {
    return <>
    <Background>
    <h1>alunos</h1>
    <Aluno nome= "Andréia almeida da silva" idade = "25" status = "ativo"></Aluno>
    <Aluno nome= "Smith almeida da silva" idade = "25" status = "Inativo"></Aluno>
    <Aluno nome= "Felipe almeida da silva" idade = "25" status = "ativo"></Aluno>
    <Aluno nome= "Guaraparí almeida da silva" idade = "25" status = "Inativo"></Aluno>
    <Aluno nome= "Búsios almeida da silva" idade = "25" status = "ativo"></Aluno>
    <Aluno nome= "Juliana almeida da silva" idade = "25" status = "ativo"></Aluno>
    <Aluno nome= "Romero Brito almeida da silva" idade = "25" status = "Inativo"></Aluno>


    </Background>
    </>
  }
}

export default Alunos;