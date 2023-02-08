import { useState } from 'react';
import { Stack, Heading, Center, Tooltip, IconButton } from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import HangmanGame from './Works/HangmanGame';
import NumberGuessingGame from './Works/NumberGuessingGame';
import TestDataGenerator from './Works/TestDataGenerator';
import PuulaakiLiigaManager from './Works/PuulaakiLiigaManager'

const Projects = () => {
    const [showHide, setShowHide] = useState(false);
    
    const ButtonClick = ()=> { (showHide===true)? setShowHide(false): setShowHide(true);}
    const ShowElement = (element)=> { return (showHide === true)? element : ""; }

    return (
        <Stack>  
            <Stack direction='column' spacing={4}>
                <Center><Heading as='h2' size='xl'>My works </Heading></Center>
                <Center><IconButton  onClick={ButtonClick} bgColor='transparent'>{(showHide===true)? <Tooltip label='Hide Myworks'><TriangleUpIcon boxSize={8}/></Tooltip>:<Tooltip label='Show Myworks'><TriangleDownIcon boxSize={8} /></Tooltip>}</IconButton></Center>
                <Stack>
                    {ShowElement(<HangmanGame />)}
                    {ShowElement(<NumberGuessingGame />)}
                    {ShowElement(<TestDataGenerator />)}
                    {ShowElement(<PuulaakiLiigaManager />)}
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Projects
