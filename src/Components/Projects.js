import { useState } from 'react';
import { Stack, Flex,Box,Text, Button } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';
import HangmanGame from './Works/HangmanGame';
import NumberGuessingGame from './Works/NumberGuessingGame';
import TestDataGenerator from './Works/TestDataGenerator';
import PuulaakiLiigaManager from './Works/PuulaakiLiigaManager'

const Projects = () => {
    const [isNotSmallerScreen] = useMediaQuery("min-width:600px");
    const [showHide, setShowHide] = useState(false);

    const ButtonClick = ()=> {

        if(showHide===true) {
            setShowHide(false)
            ShowElement()
        }else {
            setShowHide(true)
        }
    }
    const ShowElement = (element)=> {
        return (showHide === true)? element : "";
    }

    return (
        <Stack>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-sart'>
                    <Stack direction='column' spacing={4}>
                        <Button  onClick={ButtonClick}>My works Show/Hide</Button>
                        <Stack>
                            {ShowElement(<HangmanGame />)}
                            {ShowElement(<NumberGuessingGame />)}
                            {ShowElement(<TestDataGenerator />)}
                            {ShowElement(<PuulaakiLiigaManager />)}
                        </Stack>
                    </Stack>
                </Box>
            </Flex>
        </Stack>
    )
}

export default Projects
