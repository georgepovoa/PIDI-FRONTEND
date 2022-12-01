import React from 'react';
import styled from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import { Input,Box,Button,Text,Image } from '@chakra-ui/react'


var cor_de_fundo = "#0C0A09"
var cor_de_bloco = "white"
var cor_de_link = ""
var cor_de_font = "black"

function CardAluno(props) {


  return (<>
<ChakraProvider>
    <Box bg='black' w='80%' p={4} color='white' alignItems='center' ml="10%" mt="5%" display='flex' boxShadow='lg' rounded='md' justifyContent={"space-around"}>
      <Image
        borderRadius='full'
        boxSize='150px'
        src='https://picsum.photos/200'
        alt='Profile-Image'
        width={"35px"}
        height={"35px"}
        ml="-10px"
        mr="12px"
      />
      <Box mr={"12px"}>

        <Text fontSize={'0.7rem'}>Nome : {props.nome}</Text>
        <Text fontSize={'0.7rem'}>{props.idade} Anos </Text>
        <Text fontSize={'0.7rem'}>Status : {props.status}</Text>
        <p><a>mais info... </a></p>

      </Box>


    </Box>
    </ChakraProvider>
  </>)

}




class Alunos extends React.Component {
  render() { 
    return <Box bg="white" width={"100%"} height = "100%" m="0" p="0">
    <CardAluno nome= "Andréia almeida da silva" idade = "25" status = "ativo"></CardAluno>
    <CardAluno nome= "Smith almeida da silva" idade = "25" status = "Inativo"></CardAluno>
    <CardAluno nome= "Felipe almeida da silva" idade = "25" status = "ativo"></CardAluno>
    <CardAluno nome= "Guaraparí almeida da silva" idade = "25" status = "Inativo"></CardAluno>
    <CardAluno nome= "Búsios almeida da silva" idade = "25" status = "ativo"></CardAluno>
    <CardAluno nome= "Juliana almeida da silva" idade = "25" status = "ativo"></CardAluno>
    <CardAluno nome= "Romero Brito almeida da silva" idade = "25" status = "Inativo"></CardAluno>
    </Box>
  }
}

export default Alunos;