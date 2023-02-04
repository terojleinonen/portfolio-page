import { Stack,Box,Text, Heading} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import {FaGithub} from 'react-icons/fa';

const PuulaakiLiigaManager = () => {
   

    return (
        <Stack>
             <Box bg='blue.500'  borderColor='white.200' borderRadius='5px' p='10px'>
                <Heading as='h2' size='xs'>PuulaakiLiigaManager</Heading>
                <Text fontSize="xl" fontWeight="normal" p='15px'>Console app to manage teams coaches, players...</Text>  
                <a href="https://github.com/Tero75/PuulaakiLiiga" target='_blank' rel="noreferrer"><IconButton icon={<FaGithub /> } isRound="true"></IconButton></a>
            </Box>  
        </Stack>
    )
}

export default PuulaakiLiigaManager
