import React from 'react';
import { Box, Flex, Text, Center, FormControl, FormLabel, Switch,
  Button,Image,Link} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';
import { ArrowForwardIcon} from '@chakra-ui/icons'

function ChatBox(props){
  return<>
  <ChakraProvider>
  <a href='/chat/user'>
  <Box width={"100%"} height = "80px" bg="#47B5FF" display="flex" borderBottom='1px'>

      <Flex align="center" justify="center"></Flex>
    <Image
  borderRadius='full'
  boxSize='50px'
  src='https://picsum.photos/200/'
  alt='Dan Abramov'
  alignSelf= 'center'
  mr="15"
/>
    <Text alignSelf= 'center' noOfLines={[1, 2, 3]}>{props.text} </Text>
    <ArrowForwardIcon w={6} h={6} alignSelf= 'center' ml = 'auto'></ArrowForwardIcon>
    </Box>
  
    </a>
    
  </ChakraProvider>
  </>
}


class Chat extends React.Component {
  render() {
    return <>
    
    <ChatBox text = "agora ele só repete mensagem...."></ChatBox>
    <ChatBox text = "br ? "></ChatBox>
    <ChatBox text = "Lorem IpLorem IpLorem IpLorem IpLorem IpLorem IpLorem Ip ? "></ChatBox>
    <ChatBox text = "asdasdas asd asd sad as das dsa"></ChatBox>
    <ChatBox text = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"></ChatBox>
    <ChatBox text = "agora ele só repete mensagem...."></ChatBox>
    <ChatBox text = "agora ele só repete mensagem...."></ChatBox>
    <ChatBox text = "agora ele só repete mensagem...."></ChatBox>
    <ChatBox text = "agora ele só repete mensagem...."></ChatBox>
    <ChatBox text = "agora ele só repete mensagem...."></ChatBox>
    <ChatBox text = "agora ele só repete mensagem...."></ChatBox>
    <ChatBox text = "agora ele só repete mensagem...."></ChatBox>
    </>;
  }
}

export default Chat;