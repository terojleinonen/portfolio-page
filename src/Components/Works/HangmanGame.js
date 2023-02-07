import { Stack,Box,Text, Heading, Flex, Wrap, Tooltip} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'
import {FaGithub} from 'react-icons/fa';

const HangmanGame = () => {
    
    return (
        <Stack>
            <Box bg='blue.500'  borderColor='white.200' borderRadius='5px' p='10px'>
                <Heading as='h2' size='xs'>HangmanGame</Heading>
                <Text fontSize="xl" fontWeight="normal" p='15px'><ArrowRightIcon boxSize={4}/>Webapp that gives you randomly chosen word to gues. You win if you don't get your self hanged</Text>
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Box bg='red.500' borderRadius='5px' p={2}><Text>JavaScript</Text></Box>
                    <Box bg='red.500' borderRadius='5px' p={2}><Text>React</Text></Box>
                    <Box bg='red.500' borderRadius='5px' p={2}><Text>Bootstrap</Text></Box>
                    <Tooltip label='Sources'><a href="https://github.com/Tero75/hangman-game" target='_blank' rel="noreferrer"><IconButton icon={<FaGithub /> } isRound="true"></IconButton></a></Tooltip>
                </Flex>
            </Box>
        </Stack>
    )
}

export default HangmanGame