import { Flex, Text, Button, Icon, HStack, useDisclosure, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { TbTopologyStar3 } from 'react-icons/tb';
import ShoppingCart from './ShoppingCart';

export default function Navbar() {
  const hoverStyle = {
    filter: 'opacity(65%)',
  };

  // Chakra UI hook to keep track of drawer state
  const { isOpen: isOpenDrawer, onOpen: openDrawer, onClose: closeDrawer } = useDisclosure();

  return (
    <Flex
      as="nav"
      bg="blackAlpha.900"
      p="0 30px 0 30px"
      minH="45px"
      justify="space-between"
      align="center"
      gap="20px"
    >
      <Link
        as={NavLink}
        to="/"
        _activeLink={{ color: 'yellow.700' }}
        fontSize="28px"
        fontWeight="bold"
        color="gray.300"
        _hover={hoverStyle}
      >
        <HStack>
          <Icon as={TbTopologyStar3} />
          <Text>WatchCo</Text>
        </HStack>
      </Link>
      <HStack gap="50px">
        <Link
          as={NavLink}
          to="/"
          _activeLink={{ color: 'yellow.700' }}
          fontSize="20px"
          fontWeight="bold"
          color="gray.300"
          _hover={hoverStyle}
        >
          Home
        </Link>
        <Link
          as={NavLink}
          to="/shop"
          _activeLink={{ color: 'yellow.700' }}
          fontSize="20px"
          fontWeight="bold"
          color="gray.300"
          _hover={hoverStyle}
        >
          Shop
        </Link>
        <Link
          as={NavLink}
          to="/contact"
          _activeLink={{ color: 'yellow.700' }}
          fontSize="20px"
          fontWeight="bold"
          color="gray.300"
          _hover={hoverStyle}
        >
          Contact
        </Link>
        <Button size="sm" colorScheme="gray" onClick={openDrawer} _hover={hoverStyle}>
          <Icon as={FiShoppingCart} />
        </Button>
        {isOpenDrawer && <ShoppingCart onClose={closeDrawer} isOpen={isOpenDrawer} />}
      </HStack>
    </Flex>
  );
}
