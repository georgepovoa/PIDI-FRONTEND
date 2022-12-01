import React, { useState } from 'react';
import { Input, Box, Button, Text} from '@chakra-ui/react'
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
import api from '../../api/api';

function ReturnFocus(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [listaDeAulas, setListaDeAulas] = useState(props.contratoFull.aulas)
  
  
    function alterarAula(valor, index, tipo) {
        var listaDeAulasTemp = listaDeAulas
      if (tipo === "hora") {
        
        listaDeAulasTemp[index].horarioAula = valor
        return setListaDeAulas([...listaDeAulasTemp])
  
      }
      
      else {
        
        listaDeAulasTemp[index].dataAula = valor
        return setListaDeAulas([...listaDeAulasTemp])
  
      }    }
  
  
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button mt={0} onClick={onOpen} w="35%" size='xs' colorScheme="whiteAlpha" bg="#2F4858">
          detalhes
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Marcar Aulas</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {props.contratoFull.aulas
                .sort((a, b) => {
                  return (a.dataAula===null)-(b.dataAula===null) || +(new Date(a.dataAula) > new Date(b.dataAula)) || - (new Date(a.dataAula) < new Date(b.dataAula))
                })
                .map((i, index) => {
                  try {
                    var horario = i.horarioAula?.split("T")[1].split(".")[0].substring(0, 5)
                  } catch (error) {
                    horario = null
  
                  }
  
  
  
                  const marcarAula = async data => {
  
                    const response = await api.post("/contratos/aulas/update", listaDeAulas)
  
                  }
                  return (
                    <Box bg='#58A4B0' w='80%' p={4} color='white' alignItems='center' ml="10%" mt="5%" display='flex' flexDirection={"column"} boxShadow='lg' rounded='md' justifyContent={"space-between"}>
                      <p>Marcar aula</p>
                      <Text fontSize='8px'>* ao marcar uma aula, todas as outras que alterou data e horário também será alteradas</Text>
                      <br></br>
                      <p>data e Hora</p>
                      <Input
                        placeholder="Escolher Data"
                        size="md"
                        type="date"
                        name='dataAula'
                        defaultValue={i.dataAula?.split("T")[0]}
                        onChange={(e) => alterarAula(e.target.value, index, "dataAula")}
  
                      />
  
                      <Input
                        placeholder="Escolher Hora"
                        size="md"
                        type="time"
                        name='horarioAula'
                        defaultValue={horario}
  
                        onChange={(e) => alterarAula(e.target.value, index, "hora")}
                      />
  
                      <Button colorScheme='blue' size='md' margin={"15px"} height="25px" onClick={marcarAula}>
                        Marcar
                      </Button>
                    </Box>)
                })}
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

  export default ReturnFocus
  