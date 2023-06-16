import { Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <Flex
      as="nav"
      bg="gray.200"
      p="0 20px 0 20px"
      minH="70px"
      fontSize="1.7rem"
      justify="space-between"
      align="center"
      gap="8px"
    >
      <NavLink to="/">WatchCo</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Flex>
  );
}
