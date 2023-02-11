import { useColorMode } from '@chakra-ui/color-mode'
import { Stack,Box,Text, Heading, Flex, Tooltip, Link} from '@chakra-ui/react';
import { IconButton} from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'
import {FaGithub} from 'react-icons/fa';

const HangmanGame = () => {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    
    return (
        <Stack>
            <Box bg={isDark ? "whiteAlpha.200" : "gray.100"} borderRadius='5px' p='10px'>
                <Heading as='h2' size='xs'>HangmanGame</Heading>
                <Text fontSize="xl" fontWeight="normal" p='15px'><ArrowRightIcon boxSize={4}/>Webapp that gives you randomly chosen word to gues. You win if you don't get your self hanged</Text>
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Box bg={isDark ? "whiteAlpha.200" : "gray.200"} borderRadius='5px' p={2}><Text>JavaScript</Text></Box>
                    <Box bg={isDark ? "whiteAlpha.200" : "gray.200"} borderRadius='5px' p={2}><Text>React</Text></Box>
                    <Box bg={isDark ? "whiteAlpha.200" : "gray.200"} borderRadius='5px' p={2}><Text>JSON</Text></Box>
                    <Box bg={isDark ? "whiteAlpha.200" : "gray.200"} borderRadius='5px' p={2}><Text>Bootstrap</Text></Box>
                    <Tooltip label='Sources'><Link href="https://github.com/Tero75/TestDataGenerator" isExternal><IconButton icon={<FaGithub /> } isRound="true" bg={isDark ? "whiteAlpha.200" : "gray.200"}></IconButton></Link></Tooltip>
                </Flex>
            </Box>
        </Stack>
    )
}

export default HangmanGame