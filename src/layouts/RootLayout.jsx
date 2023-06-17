import { Flex, Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function RootLayout() {
  return (
    <Flex flexDirection="column" h="100vh" overflow="hidden">
      <Navbar />
      <Box as="main" flexGrow="1">
        <Outlet />
      </Box>
    </Flex>
  );
}
