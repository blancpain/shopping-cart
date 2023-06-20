import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  VStack,
  Button,
  Icon,
  Text,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import ShoppingCartItem from './ShoppingCartItem';
import CartContext from '../ShoppingCartContext';

export default function ShoppingCart({ onClose, isOpen }) {
  const { items } = useContext(CartContext);

  const allItems = items.map((item) => (
    <ShoppingCartItem
      key={item.id}
      watchID={item.id}
      watchModel={item.model}
      watchImage={item.image}
      watchPrice={item.price}
      quantity={item.quantity}
    />
  ));

  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="lg">
      <DrawerOverlay />
      <DrawerContent borderRadius="10px">
        <DrawerCloseButton size="lg" />
        <DrawerHeader borderBottomWidth="1px" fontSize="3xl">
          Your shopping cart
        </DrawerHeader>
        <DrawerBody display="flex" flexDirection="column" gap="10px" justifyContent="space-between">
          <VStack>
            {allItems.length > 0 ? (
              allItems
            ) : (
              <>
                <Text my="5em">Your cart is empty. </Text>{' '}
                <Icon as={FiShoppingCart} boxSize="10em" color="gray.100" my="20em" />
              </>
            )}
          </VStack>
          {allItems.length > 0 ? (
            <Button as={NavLink} to="/" m="15px" onClick={onClose}>
              Checkout
            </Button>
          ) : (
            <Button as={NavLink} to="/shop" m="15px" onClick={onClose}>
              Browse shop
            </Button>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
