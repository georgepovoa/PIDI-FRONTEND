import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react'
import ReturnFocus from './popup';



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
        {props.tipo === "personal" ? <><Text fontSize={'0.7rem'}> aluno : {props.aluno} </Text>
          <Text fontSize={'0.7rem'}> Restantes de aulas no contrato : {props.falta_aulas} </Text></> :
          <>
            <Text fontSize={'0.7rem'}> Personal : {props.personal} </Text>
            <Text fontSize={'0.7rem'}> Restantes de aulas no contrato : {props.falta_aulas} </Text>
          </>}





      </Box>

      <ReturnFocus contratoFull={props.contratoFull}></ReturnFocus>





    </Box>

  </>)

}

export default CardAula