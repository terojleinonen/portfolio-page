import { useState } from 'react';
import { Stack,Box,Text,Image,Button } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import {FaGithub} from 'react-icons/fa';

const PuulaakiLiigaManager = () => {
    const [showHide, setShowHide] = useState(false);

    const ButtonClick = ()=> {

        if(showHide===true) {
            setShowHide(false)
            ShowElement()
        }else {
            setShowHide(true)
        }
    }
    const ShowElement = ()=> {
        return (showHide === true)? (
            <Box>
                {/* <Image src="./thumbnails/.."/> */}
                <Text fontSize="1xl" fontWeight="normal">Is C# console app to manage teams coaches, players...</Text>  
                <a href="https://github.com/Tero75/PuulaakiLiiga" target='_blank' rel="noreferrer"><IconButton icon={<FaGithub /> } isRound="true"></IconButton></a>
            </Box>
        ) : "";
    }

    return (
        <Stack>
            <Button  onClick={ButtonClick}>PuuLaakiLiigaManager Show/Hide</Button>
            {ShowElement()}         
        </Stack>
    )
}

export default PuulaakiLiigaManager
