import { ScaleFade, Box } from '@chakra-ui/react';

export default function Contact() {
  return (
    <ScaleFade initialScale={0.1} in>
      <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
        Welcome
      </Box>
    </ScaleFade>
  );
}
