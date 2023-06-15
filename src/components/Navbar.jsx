import { Flex, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <Flex
      as="nav"
      bg="gray.200"
      p="0 20px 0 20px"
      minH="80px"
      fontSize="2rem"
      justify="space-between"
      align="center"
      gap="8px"
    >
      <NavLink to="/">Watch Store</NavLink>
      <NavLink to="/shop">Shops</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Flex>
  );
}
