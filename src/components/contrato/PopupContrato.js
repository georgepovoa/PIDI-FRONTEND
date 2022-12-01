import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button, 
  Text 
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import api from '../../api/api';
import Cookies from "universal-cookie";

export default function ReturnFocus(props) {


    async function excludeContrato(idContrato, func, set, att) {
      const result = await api.delete("/contratos/" + idContrato)
      console.log(result.data)
      func()
      set(!att)
  
    }
  
    async function aceitarContrato(idContrato, func, set, att) {
      const result = await api.put("/contratos/" + idContrato, { situacaoContrato: true })
      func()
      set(!att)
  
    }
  
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button mt={0} onClick={onOpen} w="30%" size='xs' colorScheme="whiteAlpha" bg="#2F4858">
          detalhes
        </Button>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Contrato</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text> aluno : {props.contrato.resto?.nomeDoAluno}</Text>
              <Text> plano : {props.contrato.plano?.diasPorSemana} x por semana </Text>
              <Text> Valor total da contrato  : {props.contrato.resto?.valorTotal} </Text>
              <Text> Quantidade de aulas contratadas: {props.contrato.aulasContratadas} </Text>
              <Text> Valor por aula  : {(props.contrato.resto?.valorTotal / props.contrato.aulasContratadas).toFixed(2)} </Text>
  
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose} fontSize="12px">
                Enviar mensagem
              </Button>
  
              {props.contrato?.tipo === "personal" && props.contrato?.resto.situacaoContrato == false ?
                <Button colorScheme='blue' mr={3} onClick={() => aceitarContrato(props.contrato?.resto.idContrato, onClose, props.setAtt, props.att)} fontSize="12px" wordBreak={true}>
                  Aceitar
                </Button>
                :
                <></>
              }
              {props.contrato?.resto.situacaoContrato == false ?
              <Button colorScheme='red' mr={3} onClick={() => excludeContrato(props.contrato?.resto.idContrato, onClose, props.setAtt, props.att)} fontSize="12px">
                
                {props.contrato?.tipo === "personal" ? "Recusar" : "Cancelar contrato"}
              </Button>
  :<></>}
  
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }