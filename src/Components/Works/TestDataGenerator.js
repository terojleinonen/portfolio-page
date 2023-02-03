import { Stack,Box,Text} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import {FaGithub} from 'react-icons/fa';

const TestDataGenerator = () => {
   
    return (
        <Stack>            
            <Box>
                <Text fontSize="1xl" fontWeight="normal">Is C# console app to generate random female and male names with given age range</Text>
                <a href="https://github.com/Tero75/TestDataGenerator" target='_blank' rel="noreferrer"><IconButton icon={<FaGithub /> } isRound="true"></IconButton></a>
            </Box>
        </Stack>
    )
}

export default TestDataGenerator
