import React from 'react';
import {
  ChakraProvider,
  IconButton,
  Flex,
  VStack,
  theme,
  Link
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import {FaGithub} from 'react-icons/fa';
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";

function App() {
  return (
    <ChakraProvider theme={theme}>
          <VStack p={5}>
            <Flex direction='column' alignSelf='flex-end'>            
              <ColorModeSwitcher />
              <Link href="https://github.com/Tero75" isExternal><IconButton mt='5px' icon={<FaGithub /> } color='current' variant='ghost' isRound="true"></IconButton></Link>
            </Flex>
            <Header />
            <Profile />
            <Projects />
          </VStack>
    </ChakraProvider>
  );
}

export default App;
