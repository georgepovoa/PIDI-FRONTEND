import React, { useEffect, useState } from 'react';
import { Select } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import Rating from './star-review/Rating';
import { Input, Box, Button, Text, Image } from '@chakra-ui/react'
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
import api from './api/api';
import Cookies from "universal-cookie";
import axios from 'axios';
const cookies = new Cookies();



function ReturnFocus(props) {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const finalRef = React.useRef(null)

  console.log(props)
  return (
    <>
      <Button mt={0} onClick={onOpen} w="30%" size='xs' colorScheme="whiteAlpha" bg="#2F4858">
        detalhes...
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Proposta</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text> aluno : {props.proposta.resto?.nomeDoAluno}</Text>
            <Text> plano : {props.proposta.plano?.diasPorSemana} x por semana </Text>
            <Text> Valor total da proposta  : {props.proposta.resto?.valorTotal} </Text>
            <Text> Quantidade de meses no contrato : {props.proposta.mesesContratados} </Text>
            <Text> Valor mensal da proposta  : {(props.proposta.resto?.valorTotal / props.proposta.mesesContratados).toFixed(2)} </Text>
            <Text>Observações : {props.proposta.observacoes}</Text>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose} fontSize="12px">
              enviar<br></br> mensagem
            </Button>

            <Button colorScheme='blue' mr={3} onClick={onClose} fontSize="12px" wordBreak={true}>
              Aceitar
            </Button>

            <Button colorScheme='red' mr={3} onClick={onClose} fontSize="12px">
              Recusar
            </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function CardProposta(props) {


  return (<>

    <Box bg='#58A4B0' w='80%' p={4} color='white' alignItems='center' ml="10%" mt="5%" display='flex' boxShadow='lg' rounded='md' justifyContent={"space-between"}>
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
        {props.tipo == "aluno" ?
          <>
            <Text fontSize={'0.7rem'}> Personal : {props.personal} </Text>
            <Text fontSize={'0.7rem'}> Meses de contrato : {props.mesesContratados} </Text>
            <Text fontSize={'0.7rem'}> Valor total da proposta :  <a>{props.valorTotal}</a> </Text>
          </> :
          <>
            <Text fontSize={'0.7rem'}> Aluno : {props.aluno} </Text>
            <Text fontSize={'0.7rem'}> Meses de contrato : {props.mesesContratados} </Text>
            <Text fontSize={'0.7rem'}> Valor total da proposta :  <a>{props.valorTotal}</a> </Text>
          </>}


      </Box>

      <ReturnFocus proposta={props}></ReturnFocus>





    </Box>

  </>)

}


function Propostas() {

  const [personalPropostas, setPersonalPropostas] = useState([])
  const [alunoPropostas, setAlunoPropostas] = useState([])


  useEffect(() => {
    async function getPropostasPersonal() {
      const token = cookies.get("TOKEN")

      const configuration = {
        method: "get",
        url: "http://localhost:3000/auth-endpoint",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response_user = await axios(configuration)
      const userId = response_user.data.userId

      const findPersonal = await api.get(`/personal/user/${userId}`)
      console.log("find personal", findPersonal.data)

      const propostasPersonal = await api.get(`/proposta/personal/${findPersonal.data?.idPersonal}`)
      console.log("proposta personal", propostasPersonal)
      setPersonalPropostas(propostasPersonal.data)



      const findAluno = await api.get(`/aluno/${userId}`)
      console.log("findAluno", findAluno)
      if (findAluno.data != null) {
        const propostasAluno = await api.get(`/proposta/aluno/${findAluno.data.idAluno}`)
        setAlunoPropostas(propostasAluno.data)
      }
    }

    getPropostasPersonal()
  }, [])
  return (<>
    {/* aluno: {idAluno: '91e6c8de-0177-4baa-a078-ce650ba65e4a', fk_id_user: 'ed8897f6-1cfd-44fe-8ea8-122ac0b7e855', avaliacoes: Array(0), rating: 0, documentacao: 'docs', …}
fk_id_aluno: "91e6c8de-0177-4baa-a078-ce650ba65e4a"
fk_id_personal: "fa543bad-d7fd-4e1f-b048-ca6fc296ad30"
fk_id_plano: "db8570b5-5e1e-4835-b57b-d9cf2e60458d"
idProposta: "3a862ad9-3a92-4ce7-9cd3-adb4e69790d2"
mesesContratados: 1
nomePersonal: "1"
observacoes: ""
personal: {idPersonal: 'fa543bad-d7fd-4e1f-b048-ca6fc296ad30', fk_id_user: 'df9dc7e1-a72f-40b7-8c16-365d8fc4c455', avaliacoes: Array(0), rating: 5, documentacao: 'fakeUrl', …}
plano: {idPersonalPlanos: 'db8570b5-5e1e-4835-b57b-d9cf2e60458d', fk_id_personal: 'fa543bad-d7fd-4e1f-b048-ca6fc296ad30', diasPorSemana: '3', valorDoPlano: '600'}
situacaoProposta: false
valorTotal: 600
[[Prototype]]: Object */}
    {console.log("personalPropostas", "alunoPropostas")}
    {console.log(personalPropostas, alunoPropostas)}
    {alunoPropostas.map(i => {
      console.log(i, "i")
      return (<>
        <ChakraProvider>
          <Box>
            <CardProposta
              personal={i.nomePersonal}
              mesesContratados={i.mesesContratados}
              valorTotal={i.valorTotal}
              observacoes={i.observacoes}
              plano={i.plano}
              resto={i}
            ></CardProposta>
          </Box>

          <br></br>
          <br></br>
          <br></br>
        </ChakraProvider>
      </>)
    })}

    {personalPropostas.map(i => {
      console.log(i, "i")
      return (<>
        <ChakraProvider>
          <Box>
            <CardProposta
              nomeDoAluno={i.nomeDoAluno}
              mesesContratados={i.mesesContratados}
              valorTotal={i.valorTotal}
              observacoes={i.observacoes}
              plano={i.plano}
              resto={i}
            ></CardProposta>
          </Box>

          <br></br>
          <br></br>
          <br></br>
        </ChakraProvider>
      </>)
    })}

  </>)

}

export default Propostas;