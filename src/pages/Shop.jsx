/* eslint-disable jsx-a11y/aria-proptypes */
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  ScaleFade,
  SimpleGrid,
  GridItem,
  Flex,
  Heading,
  List,
  ListItem,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
} from '@chakra-ui/react';
import data from '../data/db.json';
import Card from '../components/Card';

export default function Shop() {
  const watches = useLoaderData();
  const [priceSliderValue, setPriceSliderValue] = useState([70000]);
  const [selectedWatches, setSelectedWatches] = useState([]);

  useEffect(() => {
    setSelectedWatches(watches.data.filter((watch) => Number(watch.price) <= priceSliderValue));
  }, [priceSliderValue, watches.data]);

  return (
    <>
      <GridItem
        as="aside"
        colSpan={{ base: 'auto', md: '1' }}
        rowSpan={{ base: '1', md: 'auto' }}
        bg="gray.100"
        minH={{ base: 'auto', md: '100vh' }}
      >
        <Flex p="30px" flexDirection="column" gap="50px">
          <Heading size="lg">All products</Heading>

          <List spacing={3}>
            <ListItem>Diver watches</ListItem>
            <ListItem>Dress watches</ListItem>
          </List>

          <RangeSlider
            aria-label={['min', 'max']}
            defaultValue={[70000]}
            colorScheme="blackAlpha"
            min={1000}
            max={90000}
            step={5000}
            onChange={(value) => setPriceSliderValue(value)}
          >
            <RangeSliderMark value={1000} mt="3" fontSize="xs" ml="-4">
              €1000
            </RangeSliderMark>
            <RangeSliderMark value={90000} mt="3" fontSize="xs" ml="-8">
              €90000
            </RangeSliderMark>
            <RangeSliderMark
              value={priceSliderValue[0]}
              mt="-45px"
              ml={priceSliderValue[0] < 20000 ? '-3.5' : '-5'}
              w="15"
              color="gray.100"
              fontSize="sm"
              p="4px"
              fontWeight="bold"
              bg="blackAlpha.900"
              borderRadius="8px"
            >
              €{priceSliderValue[0] / 1000}k
            </RangeSliderMark>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb
              index={0}
              _focus={{
                outline: '3px solid',
                outlineColor: 'blackAlpha.900',
                outlineOffset: '0px',
              }}
            />
          </RangeSlider>
        </Flex>
      </GridItem>

      <GridItem as="main" colSpan={{ base: 'auto', md: '6' }} rowSpan={{ base: '15', md: 'auto' }}>
        <SimpleGrid p="20px" spacing={15} minChildWidth="300px">
          {watches.data &&
            selectedWatches.map((watch) => (
              <ScaleFade key={watch.id} in initialScale={0.1}>
                <Card key={watch.id} watchData={watch} />
              </ScaleFade>
            ))}
        </SimpleGrid>
      </GridItem>
    </>
  );
}

// below is done for practice just to test out React Router loaders
// the below func is passed as a loader in the relevant Route in RoutesConfig.jsx
export const watchLoader = () => data;
