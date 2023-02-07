import React from 'react';
import {
  ChakraProvider,
  Flex,
  VStack,
  theme,
  Spacer,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";

function App() {
  return (
    <ChakraProvider theme={theme}>
          <VStack p={5}>
            <Flex w="100%">
              <Spacer></Spacer>
              <ColorModeSwitcher />
            </Flex>
            <Header />
            <Profile />
            <Projects />
          </VStack>
    </ChakraProvider>
  );
}

export default App;
