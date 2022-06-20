import React from 'react';
import { ChakraProvider, theme} from "@chakra-ui/react";
import { ArrowForwardIcon} from '@chakra-ui/icons';
import Chat from "./pages/Chat";

function InsideChat(props){
  return<>

  </>
}


class ChatApp extends React.Component {
  render() {
    return <>
    
    <ChakraProvider theme={theme}>
      <Chat />
    </ChakraProvider>
    </>;
  }
}

export default ChatApp;