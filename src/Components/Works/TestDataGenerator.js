import { useColorMode } from '@chakra-ui/color-mode'
import { Stack,Box,Text, Heading,Flex,Tooltip, Circle} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons'
import {FaGithub} from 'react-icons/fa';

const TestDataGenerator = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <Stack>            
            <Box bg={isDark ? "whiteAlpha.200" : "gray.100"} borderRadius='5px' p='10px'>
                <Heading as='h2' size='xs'> TestDataGenerator</Heading>
                <Text fontSize="xl" fontWeight="normal" p='15px'><ArrowRightIcon boxSize={4}/> Console app to generate random female and male names with given age range</Text>
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Circle bg={isDark ? "whiteAlpha.200" : "gray.200"} p={2}><Text>C#</Text></Circle>
                    <Box bg={isDark ? "whiteAlpha.200" : "gray.200"} borderRadius='5px' p={2}><Text>C# Library</Text></Box>
                    <Tooltip label='Sources'><a href="https://github.com/Tero75/TestDataGenerator" target='_blank' rel="noreferrer"><IconButton icon={<FaGithub /> } isRound="true"></IconButton></a></Tooltip>
                </Flex>
            </Box>
        </Stack>
    )
}

export default TestDataGenerator
