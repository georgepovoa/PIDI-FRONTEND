import React from 'react';
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



function ReturnFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const finalRef = React.useRef(null)

  return (
    <>
      <Button mt={0} onClick={onOpen} w="25%" size='xs' colorScheme="whiteAlpha" bg = "#2F4858">
        Encerrar
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Avaliar Aula</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Rating
              size={48}
              icon="star"
              scale={5}
              fillColor="gold"
              strokeColor="grey"></Rating>
            <Textarea mb="15px"></Textarea>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Cancelar
            </Button>

            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Enviar
            </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function CardAula(props) {


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

        <Text fontSize={'0.7rem'}> Aluno : {props.aluno} </Text>
        <Text fontSize={'0.7rem'}> Horario de aula : {props.horario} </Text>
        <Text fontSize={'0.7rem'}> Restantes de aulas no contrato :  <a>{props.falta_aulas}</a> </Text>

      </Box>

      <ReturnFocus></ReturnFocus>





    </Box>

  </>)

}


class Aulas_tela extends React.Component {
  render() {
    const test_list = [
      {aluno: "George Póvoa", horario: "20:52", falta_aulas: "5"},
      {aluno: "Levi", horario: "1:38", falta_aulas: "16"},
      {aluno: "Nathan", horario: "10:39", falta_aulas: "2"},
      {aluno: "Rogerio", horario: "7:42", falta_aulas: "7"},
      {aluno: "Felipe", horario: "21:22", falta_aulas: "40"},
      {aluno: "Marcos", horario: "16:48", falta_aulas: "48"},
      {aluno: "Alessandro", horario: "23:20", falta_aulas: "53"},
      {aluno: "Pedro", horario: "2:23", falta_aulas: "36"},
      {aluno: "José", horario: "11:59", falta_aulas: "20"},
      {aluno: "Maria", horario: "17:49", falta_aulas: "18"},
      {aluno: "Receba", horario: "13:37", falta_aulas: "49"},
      {aluno: "Gabriel", horario: "19:16", falta_aulas: "29"},
      {aluno: "Gustavo", horario: "21:40", falta_aulas: "4"},
      {aluno: "Henrique", horario: "0:12", falta_aulas: "11"},
      {aluno: "Cristina", horario: "17:19", falta_aulas: "60"},
      {aluno: "Teste", horario: "20:31", falta_aulas: "29"},
      {aluno: "Ana Maria", horario: "16:00", falta_aulas: "51"},
      {aluno: "Sarah", horario: "16:00", falta_aulas: "11"},
      {aluno: "Lucas", horario: "16:00", falta_aulas: "37"},
      {aluno: "George Póvoa", horario: "20:52", falta_aulas: "5"},
      {aluno: "Levi", horario: "1:38", falta_aulas: "16"},
      {aluno: "Nathan", horario: "10:39", falta_aulas: "2"},
      {aluno: "Rogerio", horario: "7:42", falta_aulas: "7"},
      {aluno: "Felipe", horario: "21:22", falta_aulas: "40"},
      {aluno: "Marcos", horario: "16:48", falta_aulas: "48"},
      {aluno: "Alessandro", horario: "23:20", falta_aulas: "53"},
      {aluno: "Pedro", horario: "2:23", falta_aulas: "36"},
      {aluno: "José", horario: "11:59", falta_aulas: "20"},
      {aluno: "Maria", horario: "17:49", falta_aulas: "18"},
      {aluno: "Receba", horario: "13:37", falta_aulas: "49"},
      {aluno: "Gabriel", horario: "19:16", falta_aulas: "29"},
      {aluno: "Gustavo", horario: "21:40", falta_aulas: "4"},
      {aluno: "Henrique", horario: "0:12", falta_aulas: "11"},
      {aluno: "Cristina", horario: "17:19", falta_aulas: "60"},
      {aluno: "Teste", horario: "20:31", falta_aulas: "29"},
      {aluno: "Ana Maria", horario: "16:00", falta_aulas: "51"},
      {aluno: "Sarah", horario: "16:00", falta_aulas: "11"},
      {aluno: "Lucas", horario: "16:00", falta_aulas: "37"},
  ]
    return <>
      <ChakraProvider>
        <Box>
          {test_list.map(i=>{return <CardAula aluno={i.aluno} horario = {i.horario} falta_aulas = {i.falta_aulas}></CardAula>})}
        </Box>

  <br></br>
  <br></br>
  <br></br>
      </ChakraProvider>
    </>

  }
}

export default Aulas_tela;