import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
} from '@chakra-ui/react';

export default function ShoppingCart({ onClose, isOpen, val }) {
  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="lg">
      <DrawerOverlay />
      <DrawerContent borderRadius="10px">
        <DrawerCloseButton size="lg" transition="all 1s ease" />
        <DrawerHeader borderBottomWidth="1px" fontSize="3xl">
          Your shopping cart
        </DrawerHeader>
        <DrawerBody>{val}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
