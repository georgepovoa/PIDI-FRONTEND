import React from 'react';
import styled from 'styled-components';
import { Box,Flex,Text   } from "@chakra-ui/react"
import { ChakraProvider } from '@chakra-ui/react'


const Background = styled.div`
  position:fixed;
  width:100%;
  background-color : #1E8AD3;
  height:100%;

`;


class DadosStats extends React.Component {
  render() {
    return <>
    <ChakraProvider>
    <Background>


    <Text fontSize="2xl" fontWeight="extrabold" textAlign="center" mb={7}>Dados e estastísticas</Text>
    <Flex align="center" justify="center" direction={"column"}>
    <Text fontSize="2xl" fontWeight="extrabold">
    Total de alunos já atendidos
    </Text>

    <Text fontSize="lg" fontWeight="extrabold" mb={15}>120</Text>
    <Text fontSize="2xl" fontWeight="extrabold" m={3} >Aluno mais atendido</Text>
    <Text fontSize="lg" fontWeight="extrabold" mb={15}>Larissa Ramalho</Text>
    <Text fontSize="2xl" fontWeight="extrabold" m={3}>Região mais atendida </Text>
    <Text fontSize="lg" fontWeight="extrabold" mb={15}> Asa sul</Text>
    <Text fontSize="2xl" fontWeight="extrabold" m={3}>Alunos ativos</Text>
    <Text fontSize="lg" fontWeight="extrabold" mb={15}> 25</Text>
    <Text fontSize="2xl" fontWeight="extrabold" m={3}>Visitas no perfil</Text>

    <Text fontSize="lg" fontWeight="extrabold" mb={15}>330</Text>

    </Flex>
    



    
          

    </Background>
    </ChakraProvider>
    
    </>
  }
}

export default DadosStats;