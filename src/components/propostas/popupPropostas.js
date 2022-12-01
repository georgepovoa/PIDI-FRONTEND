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
    Text,
} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
import api from '../../api/api';




export default function ReturnFocus(props) {


    async function excludeProposta(idProposta, func, set, att) {
        const result = await api.delete("/proposta/" + idProposta)
        func()
        set(!att)

    }

    async function aceitarProposta(idProposta, func, set, att) {
        const result = await api.put("/proposta/" + idProposta, { situacaoProposta: true })
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
                            Enviar mensagem
                        </Button>

                        {props.proposta?.tipo === "personal" ?
                            <Button colorScheme='blue' mr={3} onClick={() => aceitarProposta(props.proposta?.resto.idProposta, onClose, props.setAtt, props.att)} fontSize="12px" wordBreak={true}>
                                Aceitar
                            </Button>
                            :
                            <></>
                        }

                        <Button colorScheme='red' mr={3} onClick={() => excludeProposta(props.proposta?.resto.idProposta, onClose, props.setAtt, props.att)} fontSize="12px">
                            {props.proposta?.tipo === "personal" ? "Recusar" : "Cancelar proposta"}
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
