import { Card as CardContainer, CardBody, Image, Text } from '@chakra-ui/react';

export default function Card({ watchData }) {
  return (
    <CardContainer key={watchData.id} p="20px" maxW="300px">
      <CardBody>
        <Image src={watchData.imageURL} alt="watch" boxSize="350px" objectFit="cover" />
      </CardBody>
      <Text fontSize="md" fontWeight="bold">
        {watchData.model}
      </Text>
      <Text>€{Number(watchData.price).toLocaleString('en-US')}</Text>
    </CardContainer>
  );
}
