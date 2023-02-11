import { useColorMode } from '@chakra-ui/color-mode'
import { Stack , Flex, Box, Text, Circle, Center} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const Header = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
  
    return (
        <Stack>
            <Flex direction='column'alignSelf="flex-start">
                <Box align='center'>
                    <Text fontSize={{ base: '48px', md: '80px', lg: '120px' }} fontWeight="bold" bgGradient="linear(to-r,cyan.400,blue.500,purple.500)" bgClip="text">Tero Leinonen</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>Computer engineer and programmer</Text>
                </Box>
                <Center>
                    <Circle size='305px' bg={isDark ? "gray.200" : "gray.500"} mt='12' >
                        <Image alignSelf="center" borderRadius='full' backgroudcolor="transparent"  boxSize="300px" src="img/selfie.jpg"/>
                    </Circle>
                </Center>
            </Flex>
        </Stack>
    )
}

export default Header
