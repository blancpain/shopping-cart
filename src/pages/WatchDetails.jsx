import { useParams, useLoaderData } from 'react-router-dom';
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  GridItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { IoLogoEuro } from 'react-icons/io5';
import { GoGear } from 'react-icons/go';
import { BsWatch } from 'react-icons/bs';
import data from '../data/db.json';

function Feature({ text, icon, iconBg }) {
  return (
    <Stack direction="row" align="center">
      <Flex w={8} h={8} align="center" justify="center" rounded="full" bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
}

export default function WatchDetails() {
  const { id } = useParams();
  const fullWatchData = useLoaderData();
  const selectedWatch = fullWatchData.data.find((watch) => watch.id === Number(id));
  const convertedWatchImageURL = `../${selectedWatch.imageURL}`;

  return (
    <GridItem colSpan={{ base: 'auto', md: '7' }} rowSpan={{ base: '16', md: 'auto' }}>
      <Breadcrumb
        spacing="8px"
        p="10px"
        color="gray.600"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">{selectedWatch.model}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Container maxW="5xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform="uppercase"
              color="blue.400"
              fontWeight={600}
              fontSize="sm"
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf="flex-start"
              rounded="md"
            >
              {selectedWatch.category}
            </Text>
            <Heading>{selectedWatch.model}</Heading>
            <Text color="gray.500" fontSize="lg">
              {selectedWatch.description}
            </Text>
            <Stack
              spacing={4}
              divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}
            >
              <Feature
                icon={<Icon as={GoGear} color="gray.500" w={5} h={5} />}
                iconBg={useColorModeValue('gray.100', 'gray.900')}
                text={`Caliber ${selectedWatch.caliber}`}
              />
              <Feature
                icon={<Icon as={IoLogoEuro} color="gray.500" w={5} h={5} />}
                iconBg={useColorModeValue('gray.100', 'grat.900')}
                text={Number(selectedWatch.price).toLocaleString('en-US')}
              />
              <Feature
                icon={<Icon as={BsWatch} color="gray.500" w={5} h={5} />}
                iconBg={useColorModeValue('gray.100', 'gray.900')}
                text={selectedWatch.winding}
              />
            </Stack>
            <Button fontWeight="bold" fontSize="20px">
              Add to cart
            </Button>
          </Stack>
          <Flex>
            <Image
              rounded="md"
              alt="feature image"
              src={convertedWatchImageURL}
              objectFit="cover"
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </GridItem>
  );
}

export const fullDetailsWatchLoader = () => data;
