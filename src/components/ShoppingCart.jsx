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

  const subtotal = items.reduce(
    (accumulator, object) => accumulator + object.quantity * object.price,
    0,
  );

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
              <>
                {allItems}
                <Text
                  alignSelf="flex-start"
                  my="2rem"
                  ml="1rem"
                  fontWeight="bold"
                  fontSize="xl"
                  wordBreak="break-word"
                >
                  Subtotal: €{Number(subtotal).toLocaleString('en-US')}
                </Text>
              </>
            ) : (
              <>
                <Text my={{ base: '1em', md: '5em' }}>Your cart is empty. </Text>{' '}
                <Icon
                  as={FiShoppingCart}
                  boxSize="10em"
                  color="gray.100"
                  my={{ base: '5em', md: '20em' }}
                />
              </>
            )}
          </VStack>
          {allItems.length > 0 ? (
            <Button as={NavLink} to="/" m="15px" onClick={onClose} fontSize="xl">
              Checkout
            </Button>
          ) : (
            <Button as={NavLink} to="/shop" m="15px" onClick={onClose} fontSize="xl">
              Browse Shop
            </Button>
          )}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
