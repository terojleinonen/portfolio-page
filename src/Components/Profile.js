import { 
    Stack, 
    Flex,
    Box,
    Text 
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode'

const Profile = () => {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <Stack>
            <Flex direction='column'  alignSelf="flex-start">
                <Box mt={{ base: '0', md: '8px', lg: '14px' }} align='flex-start'>
                    <Text fontSize={{ base: '12px', md: '24px', lg: '28px' }} color={isDark ? "gray.400" : "gray.500"} align='center' fontWeight='bold'>My profile:</Text>
                    <Text fontSize={{ base: '7px', md: '14px', lg: '14px' }} color={isDark ? "gray.400" : "gray.500"}>Computer engineer from Raahes School of engineering and Business 2007</Text>
                </Box>
            </Flex>
        </Stack>
    )
}

export default Profile
