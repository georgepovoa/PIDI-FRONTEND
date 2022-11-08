import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import arrow from './imgs/arrow.png';
import {
  Box, Flex, Text, Center, FormControl, FormLabel, Switch,
  Button
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import api from './api/api';
import Cookies from "universal-cookie";


const cookies = new Cookies();




const ModalDiv = styled.div`
position: fixed; 
z-index: 1; 
padding-top: 100px; 
left: 0;
top: 0;
width: 100%; 
height: 100%; 
overflow: auto; 
background-color: rgb(0,0,0); 
background-color: rgba(0,0,0,0.4); `

const ModalContent = styled.div`
background-color: #fefefe;
margin: auto;
padding: 20px;
border: 1px solid #888;
width: 80%;`

const ModalClose = styled.span`
color: #aaaaaa;
float: right;
font-size: 28px;
font-weight: bold;
`

const InputBox = styled.input`
display: block;
margin-right: auto;
margin-left: auto;
border: solid;
border-radius : 15px;
margin-bottom:15px;
padding-top:10px;
padding-bottom : 10px;
text-align: center;
`;



function Planos() {

  useEffect(() => { 
    async function getAluno() {
    const token = cookies.get("TOKEN")

    const configuration = {
      method: "get",
      url: "http://localhost:3000/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response_user =await axios(configuration)
    const userId = response_user.data.userId

    const getAluno = await api.get(`/aluno/${userId}`)
    console.log("getAlunoo")
    console.log(getAluno.data.idAluno)
    setAluno(getAluno.data.idAluno)

    }

    getAluno()

  }, []);


  let { id } = useParams();
  const [planos, setPlanos] = useState([])
  const [planoSelecionado, setPlanoSelecionado] = useState(null)
  const [aluno,setAluno] = useState("")

  function PlanoPopUp(props) {
    
    console.log("aluno")
    console.log(aluno)
    const { register, handleSubmit, formState: { error } } = useForm()


    const enviarProposta = async (data) => {
      console.log("data")
      console.log(data)
      data.valorTotal = parseFloat(data.valorTotal)
      data.mesesContratados = parseFloat(data.mesesContratados)
      data.fk_id_aluno = aluno

    
      const response = await api.post("/proposta",data)
      console.log(response)
    }
    return (
      <form onSubmit={handleSubmit(enviarProposta)}>
      <ModalDiv>
        <ModalContent>
         
            <ModalClose onClick={() => setPlanoSelecionado(null)}>&times;</ModalClose>
            <Text>Valor</Text>
            <InputBox placeholder="Valor" defaultValue={props.id.valorDoPlano} name="valorTotal" {...(register("valorTotal"))} />
            <Text>Meses no contrato</Text>
            <InputBox placeholder="Quantidade de meses" defaultValue={1} name="mesesContratados" {...(register('mesesContratados'))} />
            <Text>Observações</Text>
            <InputBox placeholder="Observações" name="observacoes" {...register("observacoes")}/>
            <input type="hidden" value={props.id.fk_id_personal} name="fk_id_personal" {...register("fk_id_personal")}></input>
            <input type="hidden" value={props.id.idPersonalPlanos} name="fk_id_plano" {...register("fk_id_plano")}></input>
            <input type="hidden" value={props.id.idPersonalPlanos}></input>
            
            <Button colorScheme='blue' as={'button'} type="submit">Enviar proposta</Button>
        </ModalContent>


      </ModalDiv>
          </form>
    )

  }


  useEffect(() => {
    async function getPlanos() {

      // Update the document title using the browser API
      const configuration = {
        method: "get",
        url: `http://localhost:3000/planos/${id}`
      };
      const response_user = await axios(configuration)
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
              onClick={() => { setPlanoSelecionado(i) }} >
              <Text fontSize="4xl" fontWeight={1000}>{i.diasPorSemana}X Semana</Text>
              <Text >R$ {i.valorDoPlano} / mês</Text>
            </Box>
          </>)
        })}
        <Box>
          <Button colorScheme='blue' as={'a'} href="/chat/user">Conversar com o Personal!</Button>
        </Box>
      </Flex>

      {planoSelecionado ? <PlanoPopUp func={setPlanoSelecionado} id={planoSelecionado} /> : <></>}
    </ChakraProvider>
  </>);
}


export default Planos;