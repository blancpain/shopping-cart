import { Flex, Box } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Flex flexDirection="column" h="100vh" overflow={isHome ? 'hidden' : 'auto'}>
      <Navbar />
      <Box as="main" flexGrow="1">
        <Outlet />
      </Box>
    </Flex>
  );
}
