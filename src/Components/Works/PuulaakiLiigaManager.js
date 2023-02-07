import { Stack,Box,Text, Heading,Flex,Tooltip} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'
import {FaGithub} from 'react-icons/fa';

const PuulaakiLiigaManager = () => {
   

    return (
        <Stack>
             <Box bg='blue.500'  borderColor='white.200' borderRadius='5px' p='10px'>
                <Heading as='h2' size='xs'>PuulaakiLiigaManager</Heading>
                <Text fontSize="xl" fontWeight="normal" p='15px'><ArrowRightIcon boxSize={4}/> Console app to manage teams coaches, players...</Text>  
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Box bg='red.500' borderRadius='5px' p={2}><Text>C#</Text></Box>
                    <Tooltip label='Sources'><a href="https://github.com/Tero75/PuulaakiLiiga" target='_blank' rel="noreferrer"><IconButton icon={<FaGithub /> } isRound="true"></IconButton></a></Tooltip>
                </Flex>
            </Box>  
        </Stack>
    )
}

export default PuulaakiLiigaManager
