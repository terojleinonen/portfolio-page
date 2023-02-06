import { Stack,Box,Text, Heading} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'
import {FaGithub} from 'react-icons/fa';

const TestDataGenerator = () => {
   
    return (
        <Stack>            
            <Box bg='blue.500'  borderColor='white.200' borderRadius='5px' p='10px'>
                <Heading as='h2' size='xs'> TestDataGenerator</Heading>
                <Text fontSize="xl" fontWeight="normal" p='15px'><ArrowRightIcon boxSize={4}/> Console app to generate random female and male names with given age range</Text>
                <a href="https://github.com/Tero75/TestDataGenerator" target='_blank' rel="noreferrer"><IconButton icon={<FaGithub /> } isRound="true"></IconButton></a>
            </Box>
        </Stack>
    )
}

export default TestDataGenerator
