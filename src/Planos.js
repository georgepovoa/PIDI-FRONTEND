import React from 'react';
import styled from 'styled-components';
import arrow from './imgs/arrow.png';
import { Box, Flex, Text, Center, FormControl, FormLabel, Switch,
  Button} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';


class Planos extends React.Component {
  render() {
    return <>
      <ChakraProvider>
        <Flex direction={"column"} align="center" justify="center" gap={45}>
        
          <Box boxShadow='dark-lg'
           p='6' 
           rounded='md' 
           bg='tomato' 
           textAlign='center' 
           mt={35}
           _hover={{ bg: "#f5492a" }}
          _focus={{ boxShadow: "outline" }}
          
           >
            
            <Text fontSize="4xl" fontWeight={1000}>2X Semana</Text>
            <Text >R$ 240,00 / mês</Text>
          </Box>
          

          <Box boxShadow='dark-lg'
           p='6'
            rounded='md'
             bg='white' 
             textAlign='center'
              mt={35}
              _hover={{ bg: "lightgray" }}
          _focus={{ boxShadow: "outline" }}
          
              >
            <Text fontSize="4xl" fontWeight={1000}>3X Semana</Text>
            <Text >R$ 300,00 / mês</Text>
          </Box>

          <Box boxShadow='dark-lg'
           p='6' 
           rounded='md' 
           bg='#5FD068' 
           textAlign='center' 
           mt={35}
           _hover={{ bg: "#33cc3f" }}
          _focus={{ boxShadow: "outline" }}
          >
            <Text fontSize="4xl" fontWeight={1000}>5X Semana</Text>
            <Text >R$ 450,00 / mês</Text>
          </Box>
          <Box  
          boxShadow='dark-lg'
           p='6' 
           rounded='md'
            bg='#30BFFF' 
            textAlign='center'
             mt={35}
             
             >
          <FormControl display='flex' alignItems='center'>
            <FormLabel mb='0'>
              Enable email alerts?
            </FormLabel>
            <Switch id='email-alerts' size='lg'/>
          </FormControl>

          </Box>
          <Box>
          <Button colorScheme='blue' >Conversar com o Personal!</Button>
          </Box>


        </Flex>
      </ChakraProvider>
    </>;
  }
}

export default Planos;