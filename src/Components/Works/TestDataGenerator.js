import { Stack,Box,Text} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import {FaGithub} from 'react-icons/fa';

const TestDataGenerator = () => {
   
    return (
        <Stack>            
            <Box  h= "auto" bg='lightblue' border='2px' borderColor='white.200' borderRadius='5px' p='5px'>
                <Text fontSize="xl" fontWeight="normal">Console app to generate random female and male names with given age range</Text>
                <a href="https://github.com/Tero75/TestDataGenerator" target='_blank' rel="noreferrer"><IconButton icon={<FaGithub /> } isRound="true"></IconButton></a>
            </Box>
        </Stack>
    )
}

export default TestDataGenerator
