import React from 'react';
import styled from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

var cor_de_fundo = "#0C0A09"
var cor_de_bloco_ok = "linear-gradient(180deg, rgba(255,255,255,1) 97%, rgba(113,255,45,1) 100%)"
var cor_de_bloco_ok_2 = "white"
var cor_de_bloco_nok = "#858585"
var cor_de_link = "#000000"
var cor_de_font = "black"

const Background = styled.div`
  position:fixed;
  width:100%;
  background-color : ${cor_de_fundo};
  height:100%;
  overflow:auto;
  

`;

const Background_contrato = styled.div`

    padding:5px;
    width:100%;
    background: ${props => props.ativo.fg };
    margin-bottom:9px;


`;

const Link = styled.a`
  text-decoration:none;
  color : ${cor_de_link};
  font-weight: 800;
  


`



function Contrato(props) {
  const ativo = {
    fg: cor_de_bloco_ok
    
  };
  const inativo = {
    fg: cor_de_bloco_nok
    
  };
  return <> 
  <ChakraProvider>

  <Box  boxShadow='dark-lg' p='1' rounded='lg' >
  <Background_contrato ativo = {props.ativo?ativo:inativo}>
  <p>contratante : {props.contratante}</p>
  <p>contratado : {props.contratado}</p>
  <p>data prevista : {props.data}</p>
  <p>valor Total : {props.valor_total} R$</p>
  <p>Contrato ativo : {props.ativo?"Em andamento":"Encerrado"}</p>
  <Link href='#'>Abrir contrato</Link>
  </Background_contrato>
  </Box>


  </ChakraProvider>

  </>;
}

class Financeiro extends React.Component {
  render() {
    const cor = {
      main: "green"
    };
    const contratado = "José Pereira"
    const teste_array = [
      {contratante: "Salve", contratado:contratado, ativo:true ,data:"2021-03-01->2022-01-01",valor_total:"3000"},
      {contratante: "Jorge", contratado:contratado, ativo:false ,data:"2021-03-01->2022-01-01",valor_total:"3000"},
      {contratante: "Felipe Smith", contratado:contratado, ativo:false ,data:"2021-03-01->2022-01-01",valor_total:"3000"},
      {contratante: "Guaraparí", contratado:contratado, ativo:true ,data:"2021-03-01->2022-01-01",valor_total:"3000"},
      {contratante: "Búsios", contratado:contratado, ativo:true ,data:"2021-03-01->2022-01-01",valor_total:"3000"},
      {contratante: "Salve", contratado:contratado, ativo:true ,data:"2021-03-01->2022-01-01",valor_total:"3000"},
      {contratante: "Jorge", contratado:contratado, ativo:false ,data:"2021-03-01->2022-01-01",valor_total:"3000"},
      {contratante: "Felipe Smith", contratado:contratado, ativo:false ,data:"2021-03-01->2022-01-01",valor_total:"3000"},
      {contratante: "Guaraparí", contratado:contratado, ativo:true ,data:"2021-03-01->2022-01-01",valor_total:"3000"},
      {contratante: "Búsios", contratado:contratado, ativo:true ,data:"2021-03-01->2022-01-01",valor_total:"3000"},

    ]    
    return <>
    <Background>
    {teste_array.map( 
    i=>{ return<Contrato 
    contratante = {i.contratante } 
    contratado = {i.contratado} 
    ativo = {i.ativo}
    data = {i.data}
    valor_total ={i.valor_total}
      />
    })}
    <br></br>
    <br></br>


    
    </Background>
    </>
  }
}

export default Financeiro;