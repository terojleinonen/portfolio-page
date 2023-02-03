import { Stack, Flex,Box,Text } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/media-query';

const Profile = () => {
    const [isNotSmallerScreen] = useMediaQuery("min-width:600px");
    return (
        <Stack>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="2xl" fontWeight="semibold" align="center">My profile:</Text>
                    <Text fontSize="1xl" fontWeight="normal">Graduated from Raahes School of engineering and Business 2007 as computer engineer</Text>
                </Box>
            </Flex>
        </Stack>
    )
}

export default Profile
