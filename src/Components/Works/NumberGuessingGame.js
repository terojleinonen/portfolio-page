import { Stack,Box,Text, Heading,Flex,Tooltip} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'
import {FaGithub} from 'react-icons/fa';

const NumberGuessingGame = () => {
    
    return (
        <Stack>            
            <Box bg='blue.500'  borderColor='white.200' borderRadius='5px' p='10px'>
                <Heading as='h2' size='xs'>NumberGuessingGame</Heading>
                <Text fontSize="xl" fontWeight="normal" p='15px'><ArrowRightIcon boxSize={4}/> Console app that gives you randomly chosen number to gues</Text>
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Box bg='red.500' borderRadius='5px' p={2}><Text>C#</Text></Box>
                    <Tooltip label='Sources'><a href="https://github.com/Tero75/NumberGuessingGame" target='_blank' rel="noreferrer"><IconButton icon={<FaGithub /> } isRound="true"></IconButton></a></Tooltip>
                </Flex>
            </Box>
        </Stack>
    )
}

export default NumberGuessingGame
