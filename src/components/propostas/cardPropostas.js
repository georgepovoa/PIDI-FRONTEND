import React from 'react';
import {  Box, Text, Image } from '@chakra-ui/react'
import ReturnFocus from './popupPropostas';

export default function CardProposta(props) {


    return (<>
  
      <Box bg={props.tipo === "personal" ? "#58A4B0" : "#00A4B0"} w='80%' p={4} color='white' alignItems='center' ml="10%" mt="5%" display='flex' boxShadow='lg' rounded='md' justifyContent={"space-between"}>
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
  
        <ReturnFocus proposta={props} setAtt={props.setAtt} att={props.att}></ReturnFocus>
  
  
  
  
  
      </Box>
  
    </>)
  
  }