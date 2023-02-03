import { useColorMode } from '@chakra-ui/color-mode'
import { Stack , Flex, Box, Text} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useMediaQuery } from '@chakra-ui/media-query';

const Header = () => {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("min-width:600px");
    return (
        <Stack>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='center'>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r,cyan.400,blue.500,purple.500)" bgClip="text">Tero Leinonen</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>Computer engineer and programmer</Text>
                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full' backgroudcolor="transparent" boxShadow="lg" boxSize="300px" src="img/selfie.jpg"/>
            </Flex>
        </Stack>
    )
}

export default Header
