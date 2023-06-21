import { useContext } from 'react';
import {
  Card as CardContainer,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Flex,
  Button,
  Input,
} from '@chakra-ui/react';
import CartContext from '../ShoppingCartContext';

export default function ShoppingCartItem({
  watchID,
  watchModel,
  watchImage,
  watchPrice,
  quantity,
}) {
  const convertedWatchImageURL = `../${watchImage}`;

  const { addToCart, removeFromCart, updateQuantity } = useContext(CartContext);
  const buttonClickHandler = (e) => {
    const { name } = e.target;

    if (name === 'add') {
      addToCart(watchID, watchModel, watchImage, watchPrice, quantity + 1);
    } else if (name === 'del') {
      removeFromCart(watchID);
    }
  };

  const inputHandler = (e) => {
    const { value } = e.target;
    updateQuantity(watchID, value);
  };

  // Only allow digits, Backspace, Left and Right arrow for input field
  const handleKeyDown = (e) => {
    if (
      !/^\d$/.test(e.key) &&
      e.key !== 'Backspace' &&
      e.key !== 'ArrowLeft' &&
      e.key !== 'ArrowRight'
    ) {
      e.preventDefault();
    }
  };

  return (
    <CardContainer maxW="sm" m="0.5rem">
      <CardBody as={Flex}>
        <Image
          src={convertedWatchImageURL}
          alt="Watch"
          borderRadius="lg"
          boxSize="10em"
          objectFit="cover"
          data-testid="shopping-cart-item-container-image"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{watchModel}</Heading>
          <Text color="blackAlpha.900" fontSize="lg">
            €{Number(watchPrice).toLocaleString('en-US')}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Flex flexGrow="1" gap="1rem">
          <Button
            variant="solid"
            colorScheme="gray"
            flexGrow="10"
            name="del"
            onClick={buttonClickHandler}
            data-testid="shopping-cart-del-btn"
          >
            -
          </Button>
          <Input
            type="number"
            w="45px"
            flexGrow="1"
            value={quantity}
            onKeyDown={handleKeyDown}
            onChange={inputHandler}
            data-testid="shopping-cart-item-quantity"
          />
          <Button
            variant="solid"
            colorScheme="gray"
            flexGrow="10"
            name="add"
            onClick={buttonClickHandler}
            bg="gray.300"
            data-testid="shopping-cart-add-btn"
          >
            +
          </Button>
        </Flex>
      </CardFooter>
    </CardContainer>
  );
}
