
import React from 'react';
import styled from 'styled-components';


const A = styled.a`
text-decoration: none;
color: black;

`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;

  color: black;
  margin-bottom:12px;
  margin-top:20px;
`;



const Background = styled.div`
  position:fixed;
  width:100%;
  background-color : #1E8AD3;
  height:100%;
  overflow:auto;
  padding:5px;

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
  background-color : #41a8f5;
  padding-top : 10px;
  padding-bottom : 10px;

  width:45%;

`;

const Labelcenter = styled.p`

  text-align: center;
  margin-bottom: 3px;


`;



class EditarPerfil extends React.Component {
  constructor() {
    super();
    this.state = {
      usuario:'Personal Teste',
      endereco:'Samambaia etc',
      email:'email_teste@teste.com',
      CPF:'01100110011',
      RG:'3333333',
      especialidades:'Vai ser lista',
      valido:'Vai ser Bool',
      midias:'Vai ser outra Página',
    
    }
}
onChange(e) {
  this.setState({[e.target.name]: e.target.value})
}
  render() {
    return <>
    <Background>
      <Title>Alterar Dados</Title>
      <Labelcenter>Nome</Labelcenter><InputBox name='usuario' value={this.state.usuario} onChange={(value) => this.onChange(value)}></InputBox>
      <Labelcenter>Endereço</Labelcenter><InputBox name='endereco' value={this.state.endereco} onChange={(value) => this.onChange(value)}></InputBox>
      <Labelcenter>Email </Labelcenter><InputBox name='email' value={this.state.email} onChange={(value) => this.onChange(value)}></InputBox>
      <Labelcenter>CPF</Labelcenter><InputBox name='CPF' value={this.state.CPF} onChange={(value) => this.onChange(value)}></InputBox>
      <Labelcenter>RG</Labelcenter><InputBox name='RG' value={this.state.RG} onChange={(value) => this.onChange(value)}></InputBox>
      <Labelcenter>Especialidades</Labelcenter><InputBox name='especialidades' value={this.state.especialidades} onChange={(value) => this.onChange(value)}></InputBox>
      <Labelcenter>Válido</Labelcenter><InputBox name='valido' value={this.state.valido} onChange={(value) => this.onChange(value)}></InputBox>
      <Labelcenter>Mídias</Labelcenter><InputBox name='midias' value={this.state.midias} onChange={(value) => this.onChange(value)}></InputBox>

      <SubmitCadastro>Alterar </SubmitCadastro>
    </Background>

    </>
  }
}

export default EditarPerfil;