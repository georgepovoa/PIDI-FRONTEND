import React from 'react';
import styled from 'styled-components';


const Background = styled.div`
  position:fixed;
  width:100%;
  background-color : #1E8AD3;
  height:100%;

`;

const Background_contrato = styled.div`
    padding:5px;
    width:100%;
    background-color : ${props => props.ativo.fg };
    margin-bottom:9px;


`;



function Contrato(props) {
  const ativo = {
    fg: "green"
    
  };
  const inativo = {
    fg: "gray"
    
  };
  return <> 

  <Background_contrato ativo = {props.ativo?ativo:inativo}>
  <p>contratante : {props.contratante}</p>
  <p>contratado : {props.contratado}</p>
  <p>data prevista : {props.data}</p>
  <p>valor Total : {props.valor_total} R$</p>
  </Background_contrato>

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

    ]    
    return <>
    <Background>

    <h1>Financeiro</h1>

    {teste_array.map( 
    i=>{ return<Contrato 
    contratante = {i.contratante } 
    contratado = {i.contratado} 
    ativo = {i.ativo}
    data = {i.data}
    valor_total ={i.valor_total}
      />
    })}

    
    </Background>
    </>
  }
}

export default Financeiro;