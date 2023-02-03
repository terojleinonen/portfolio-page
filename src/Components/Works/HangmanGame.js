import { Stack,Box,Text} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import {FaGithub} from 'react-icons/fa';

const HangmanGame = () => {
    
    return (
        <Stack>
            <Box h= "auto" bg='lightblue' border='2px' borderColor='white.200' borderRadius='5px' p='5px'>
                <Text fontSize="xl" fontWeight="normal">Is React and Bootstrap app...</Text>
                <a href="https://github.com/Tero75/hangman-game" target='_blank' rel="noreferrer"><IconButton icon={<FaGithub /> } isRound="true"></IconButton></a>
            </Box>
        </Stack>
    )
}

export default HangmanGame