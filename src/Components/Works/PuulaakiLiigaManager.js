import { useColorMode } from '@chakra-ui/color-mode'
import { 
    Stack,
    Box,
    Text, 
    Heading,
    Flex,
    Tooltip, 
    Circle, 
    Link,
    IconButton
} from '@chakra-ui/react';
import {FaGithub} from 'react-icons/fa';

const PuulaakiLiigaManager = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";   

    return (
        <Stack>
             <Box bg={isDark ? "whiteAlpha.200" : "gray.100"} borderRadius='5px' p='10px'>
                <Heading as='h2' size='xs'>PuulaakiLiigaManager</Heading>
                <Text fontSize={{ base: '14px', md: '20px', lg: '24px' }} fontWeight="normal" p='15px' ml='8px'> Console app to manage teams coaches, players...</Text>  
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Circle bg={isDark ? "whiteAlpha.200" : "gray.200"} p={2}><Text>C#</Text></Circle>
                    <Tooltip label='Sources'><Link href="https://github.com/Tero75/TestDataGenerator" isExternal><IconButton icon={<FaGithub /> } isRound="true" bg={isDark ? "whiteAlpha.200" : "gray.200"}></IconButton></Link></Tooltip>
                </Flex>
            </Box>  
        </Stack>
    )
}

export default PuulaakiLiigaManager
