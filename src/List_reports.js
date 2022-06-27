import React from 'react';
import styled from 'styled-components';

import { ChakraProvider } from '@chakra-ui/react'
import { Box, Button, Text, Image } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'



function CardAula(props) {


  return (<>

    <Box bg='#D90429' w='80%' p={4} color='white' alignItems='center' ml="10%" mt="5%" display='flex' boxShadow='lg' rounded='md' justifyContent={"space-between"}>
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

        <Text fontSize={'0.7rem'}>Nome : {props.nome} </Text>
        <Text fontSize={'0.7rem'}>Classe : {props.classe} </Text>
        <Text fontSize={'0.7rem'}>Report : {props.report} </Text>

      </Box>

      <Box ml={"12px"} display="flex" flexDirection={"column"}>

        <Button size='xs'colorScheme='red' mt="5px" bg="#ab0d1f">Bloquear</Button>
        <Button size='xs'colorScheme='yellow' mt="5px">Enviar Aviso</Button>
        <Button size='xs'colorScheme='blue' mt="5px">Arquivar</Button>

      </Box>
    </Box>

  </>)

}

class List_reports extends React.Component {
    constructor() {
      super();
      this.state = {
      };
  
  
    }
    
    
    render() {

      return <>
            <ChakraProvider>

      <CardAula nome = "Lucas" report = "Conduta inadequada no Chat" classe = 'Conduta inadequada'/>
      <CardAula nome = "Lucas" report = "3 meses atrasado" classe = 'Financeira'/>
      <CardAula nome = "Lucas" report = "Não pode mais dar aula e se recusa a pagar a multa" classe = 'Quebra de contrato'/>
      <CardAula nome = "Lucas" report = "Conduta inadequada no Chat" classe = 'Conduta inadequada'/>
      <CardAula nome = "Lucas" report = "3 meses atrasado" classe = 'Financeira'/>
      <CardAula nome = "Lucas" report = "Não pode mais dar aula e se recusa a pagar a multa" classe = 'Quebra de contrato'/>

      <CardAula nome = "Lucas" report = "Conduta inadequada no Chat" classe = 'Conduta inadequada'/>
      <CardAula nome = "Lucas" report = "3 meses atrasado" classe = 'Financeira'/>
      <CardAula nome = "Lucas" report = "Não pode mais dar aula e se recusa a pagar a multa" classe = 'Quebra de contrato'/>

      <CardAula nome = "Lucas" report = "Conduta inadequada no Chat" classe = 'Conduta inadequada'/>
      <CardAula nome = "Lucas" report = "3 meses atrasado" classe = 'Financeira'/>
      <CardAula nome = "Lucas" report = "Não pode mais dar aula e se recusa a pagar a multa" classe = 'Quebra de contrato'/>
<br></br>
<br></br>
<br></br>

</ChakraProvider>
      </>
    }
  }
  
  export default List_reports;



