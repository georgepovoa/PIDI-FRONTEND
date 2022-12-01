import styled from 'styled-components';



export const Logo = styled.img`
  width : 100%;
  height : 30%;
  margin-bottom:25px;
  
`;

export const Title = styled.h1`
  font-size: 2em;
  text-align: center;

  color: black;
  margin-bottom:12px;
`;

export const InputBox = styled.input`
  display: block;
  margin-right: auto;
  margin-left: auto;
  border: solid;
  border-radius : 15px;
  margin-bottom:15px;
  padding-top:10px;
  padding-bottom : 10px;
`;

export const BtnCadastro = styled.button`
  
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

export const Obs = styled.p`
text-align : center;
  font-size : 0.7em;

`;

export const Link = styled.a`
  color : orange ; 

`;
