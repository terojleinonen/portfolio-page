import { Stack, Flex,Box,Text } from '@chakra-ui/react';

const Profile = () => {
   
    return (
        <Stack>
            <Flex direction='column'  alignSelf="flex-start">
                <Box mt='16' align='flex-start'>
                    <Text fontSize="2xl" fontWeight="semibold" align="center">My profile:</Text>
                    <Text fontSize="1xl" fontWeight="normal">Graduated from Raahes School of engineering and Business 2007 as computer engineer</Text>
                </Box>
            </Flex>
        </Stack>
    )
}

export default Profile
