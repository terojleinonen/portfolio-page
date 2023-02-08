import { useColorMode } from '@chakra-ui/color-mode'
import { Stack,Box,Text, Heading,Flex,Tooltip, Circle} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'
import {FaGithub} from 'react-icons/fa';

const PuulaakiLiigaManager = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";   

    return (
        <Stack>
             <Box bg={isDark ? "whiteAlpha.200" : "gray.100"} borderRadius='5px' p='10px'>
                <Heading as='h2' size='xs'>PuulaakiLiigaManager</Heading>
                <Text fontSize="xl" fontWeight="normal" p='15px'><ArrowRightIcon boxSize={4}/> Console app to manage teams coaches, players...</Text>  
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Circle bg={isDark ? "whiteAlpha.200" : "gray.200"} p={2}><Text>C#</Text></Circle>
                    <Tooltip label='Sources'><a href="https://github.com/Tero75/PuulaakiLiiga" target='_blank' rel="noreferrer"><IconButton icon={<FaGithub /> } isRound="true"></IconButton></a></Tooltip>
                </Flex>
            </Box>  
        </Stack>
    )
}

export default PuulaakiLiigaManager
