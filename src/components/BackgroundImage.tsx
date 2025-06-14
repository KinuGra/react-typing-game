import { BackgroundImage, Center, Text, Box } from '@mantine/core';

function Demo({children} :{children :any}) {
    return (
        <Box maw={300} mx="auto">
            <BackgroundImage
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
                radius="sm"
            >
                <Center p="md">
                    <Text c="white">
                        {children}
                    </Text>
                </Center>
            </BackgroundImage>
        </Box>
    );
}