import React from 'react';
import {
  Text, 
  Button
} from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import api from '../../api/api';

import {
  ModalDiv,
  ModalContent,
  ModalClose,
  InputBox
} from './StylePlanos'


export default function PlanoPopUp(props) {

    console.log("aluno")
    console.log(props.aluno)
    const { register, handleSubmit, formState: { error } } = useForm()


    const enviarProposta = async (data) => {
      console.log("data")
      console.log(data)
      data.valorTotal = parseFloat(data.valorTotal)
      data.mesesContratados = parseFloat(data.mesesContratados)
      data.fk_id_aluno = props.aluno


      const response = await api.post("/proposta", data)
      console.log(response)
    }
    return (
      <form onSubmit={handleSubmit(enviarProposta)}>
        <ModalDiv>
          <ModalContent>

            <ModalClose onClick={() => props.func(null)}>&times;</ModalClose>
            <Text>Valor</Text>
            <InputBox placeholder="Valor" defaultValue={props.id.valorDoPlano} name="valorTotal" {...(register("valorTotal"))} />
            <Text>Meses no contrato</Text>
            <InputBox placeholder="Quantidade de meses" defaultValue={1} name="mesesContratados" {...(register('mesesContratados'))} />
            <Text>Observações</Text>
            <InputBox placeholder="Observações" name="observacoes" {...register("observacoes")} />
            <input type="hidden" value={props.id.fk_id_personal} name="fk_id_personal" {...register("fk_id_personal")}></input>
            <input type="hidden" value={props.id.idPersonalPlanos} name="fk_id_plano" {...register("fk_id_plano")}></input>
            <input type="hidden" value={props.id.idPersonalPlanos}></input>

            <Button colorScheme='blue' as={'button'} type="submit">Enviar proposta</Button>
          </ModalContent>


        </ModalDiv>
      </form>
    )

  }