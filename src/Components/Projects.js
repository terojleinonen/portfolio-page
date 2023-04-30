import { useState } from 'react';
import { Stack, Heading, Center, Tooltip, IconButton } from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/color-mode'
import HangmanGame from './Works/HangmanGame';
import NumberGuessingGame from './Works/NumberGuessingGame';
import TestDataGenerator from './Works/TestDataGenerator';
import PuulaakiLiigaManager from './Works/PuulaakiLiigaManager'

const Projects = () => {
    const [showHide, setShowHide] = useState(false);
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    
    const ButtonClick = ()=> {showHide ? setShowHide(false): setShowHide(true);}
    const ShowElement = (element)=> { return showHide ? element : null; }

    return (
        <Stack>  
            <Stack direction='column'>
                <Center><Heading as='h2' fontSize={{ base: '12px', md: '24px', lg: '28px' }} color={isDark ? "gray.400" : "gray.500"} mt={8}>My works </Heading></Center>
                <Center><IconButton  onClick={ButtonClick} bgColor='transparent' color={isDark ? "gray.400" : "gray.500"} >{showHide ? <Tooltip label='Hide Myworks'><TriangleUpIcon boxSize={8}/></Tooltip>:<Tooltip label='Show Myworks'><TriangleDownIcon boxSize={8} /></Tooltip>}</IconButton></Center>
                <Stack>
                    {ShowElement(
                        <Stack>
                            <HangmanGame />
                            <NumberGuessingGame />
                            <TestDataGenerator />
                            <PuulaakiLiigaManager />
                        </Stack>
                    )}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Projects
