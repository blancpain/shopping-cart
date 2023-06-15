import { Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <Flex as="nav" bg="gray.200" minH="80px" fontSize="3rem" justify="space-evenly" align="center">
      <NavLink to="/">Watch Store</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Flex>
  );
}
