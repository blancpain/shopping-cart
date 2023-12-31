import { useContext } from 'react';
import {
  Flex,
  Text,
  Button,
  Icon,
  HStack,
  useDisclosure,
  Link,
  Tag,
  TagRightIcon,
  TagLabel,
  Box,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { TbTopologyStar3 } from 'react-icons/tb';
import CartContext from '../ShoppingCartContext';
import ShoppingCart from './ShoppingCart';

export default function Navbar() {
  const { items } = useContext(CartContext);
  const fullQuantity = items.reduce((accumulator, object) => accumulator + object.quantity, 0);

  const hoverStyle = {
    filter: 'opacity(65%)',
  };

  // Chakra UI hook to keep track of drawer state
  const { isOpen: isOpenDrawer, onOpen: openDrawer, onClose: closeDrawer } = useDisclosure();

  return (
    <Flex
      as="nav"
      bg="blackAlpha.900"
      p={{ base: '10px', md: '0 30px 0 30px' }}
      minH={{ base: '110px', md: '55px' }}
      justify="space-between"
      align="center"
      flexDir={{ base: 'column', md: 'row' }}
    >
      <Link
        as={NavLink}
        to="/"
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
      <HStack gap={{ base: '20px', md: '50px' }}>
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
        <Button size="sm" onClick={openDrawer} _hover={hoverStyle} data-testid="shopping-cart-btn">
          {items.length > 0 ? (
            <Tag _active={{ backgroundColor: 'gray.300' }}>
              <TagLabel
                as={Box}
                borderRadius="full"
                bg="blackAlpha.900"
                p="0.2rem"
                fontSize="xs"
                minW="1.3rem"
                fontWeight="bold"
                color="white"
                data-testid="navbar-cart-quantity"
              >
                {fullQuantity < 1000 ? fullQuantity : '1k+'}
              </TagLabel>
              <TagRightIcon as={FiShoppingCart} />
            </Tag>
          ) : (
            <Icon as={FiShoppingCart} />
          )}
        </Button>
        {isOpenDrawer && <ShoppingCart onClose={closeDrawer} isOpen={isOpenDrawer} />}
      </HStack>
    </Flex>
  );
}
