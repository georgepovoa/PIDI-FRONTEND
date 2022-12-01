import React from 'react';
import { Select } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import { Input,Box,Button,Text } from '@chakra-ui/react'



class Report extends React.Component {
  render() {
    return <>
    <ChakraProvider>
    <Box boxShadow='dark-lg' p='6' rounded='md' bg='white' mt="20vh" ml = "2vh" mr = "2vh">
    <Text  w="75%" ml="7vw" mt = "1vh" mb="2vh">Nome do Usuário a ser reportado </Text>
    <Input  placeholder='Usuário' size="md" w="75%" ml="7vw" mt = "1vh" ></Input >
    <Text  w="75%" ml="7vw" mt = "1vh" mb="2vh">Categoria de Report : </Text>
    <Select  name="report" id="report"  w="75%" ml="7vw" mt = "1vh">
      <option value="Conduta inadequada">Conduta inadequada</option>
      <option value="Financeira">Financeira</option>
      <option value="QuebraDeContrato">Quebra de contrato</option>
    </Select >
    <br></br>
    <br></br>
    <Textarea  placeholder='Dê mais detalhes por favor' rows="7" cols="50" w="80%" ml="7vw" mt = "0.5vh"></Textarea >
    <Button colorScheme='red' variant='outline' w="40%" ml="25vw" mt = "3vh">Reportar</Button>
    </Box>

    
    </ChakraProvider>
    </>
   
  }
}

export default Report;