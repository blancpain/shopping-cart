import { Flex, Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';

const routesConfig = [
  {
    path: '/',
    element: (
      <Flex flexDirection="column" h="100vh" overflow="hidden">
        <Navbar />
        <Box as="main" flexGrow="1">
          <Outlet />
        </Box>
      </Flex>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
];

export default routesConfig;
