import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Spacer,
  VStack,
  IconButton,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import {FaGithub} from 'react-icons/fa';
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8} p={5}>
            <Flex w="100%">
              <Spacer></Spacer>
              <a href="https://github.com/Tero75" target='_blank' rel="noreferrer"><IconButton ml={8} icon={<FaGithub /> }  isRound="true"></IconButton></a>
             
            </Flex>
            <Header />
            <Profile />
            <Projects />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
