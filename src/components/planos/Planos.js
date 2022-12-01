import React, { useEffect, useState } from 'react';
import arrow from '../../imgs/arrow.png';
import {
  Box, Flex, Text, Center, FormControl, FormLabel, Switch,
  Button
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import api from '../../api/api';
import Cookies from "universal-cookie";

import PlanoPopUp from './PopUpPlano'
import getToken from '../../api/auth/getToken';

const cookies = new Cookies();


function Planos() {

  useEffect(() => {
    async function getAluno() {
      
      const response_user = await getToken()
      const userId = response_user.data.userId

      const getAluno = await api.get(`/aluno/user/${userId}`)
      console.log("getAlunoo")
      console.log(getAluno.data.idAluno)
      setAluno(getAluno.data.idAluno)

    }

    getAluno()

  }, []);


  let { id } = useParams();
  const [planos, setPlanos] = useState([])
  const [planoSelecionado, setPlanoSelecionado] = useState(null)
  const [aluno, setAluno] = useState("")

 


  useEffect(() => {
    async function getPlanos() {

      // Update the document title using the browser API
      
      const response_user = await api.get(`/planos/${id}`)
      console.log(response_user)
      setPlanos(response_user.data)

    }

    getPlanos()
    console.log(planos)




  }, []);

  return (<>
    <h1>{id}</h1>
    <ChakraProvider>
      <Flex direction={"column"} align="center" justify="center" gap={45}>

        {planos.map(i => {
          return (<>
            <Box boxShadow='dark-lg'
              p='6'
              rounded='md'
              bg='tomato'
              textAlign='center'
              mt={35}
              _hover={{ bg: "#f5492a" }}
              _focus={{ boxShadow: "outline" }}
              onClick={() => { setPlanoSelecionado(i) }} 
              key={i.idContrato}
              >
              <Text fontSize="4xl" fontWeight={1000}>{i.diasPorSemana}X Semana</Text>
              <Text >R$ {i.valorDoPlano} / mês</Text>
            </Box>
          </>)
        })}
        <Box>
          <Button colorScheme='blue' as={'a'} href="/chat/user">Conversar com o Personal!</Button>
        </Box>
      </Flex>

      {planoSelecionado ? <PlanoPopUp func={setPlanoSelecionado} id={planoSelecionado} aluno ={aluno}/> : <></>}
    </ChakraProvider>
  </>);
}


export default Planos;