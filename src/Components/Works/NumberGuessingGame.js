import { Stack,Box,Text} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import {FaGithub} from 'react-icons/fa';

const NumberGuessingGame = () => {
    
    return (
        <Stack>            
            <Box>
                <Text fontSize="1xl" fontWeight="normal">Is react and bootstrap app...</Text>
                <a href="https://github.com/Tero75/NumberGuessingGame" target='_blank' rel="noreferrer"><IconButton icon={<FaGithub /> } isRound="true"></IconButton></a>
            </Box>
        </Stack>
    )
}

export default NumberGuessingGame
