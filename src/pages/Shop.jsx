/* eslint-disable jsx-a11y/aria-proptypes */
import { useState, useEffect, useMemo } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  ScaleFade,
  Grid,
  GridItem,
  Flex,
  Heading,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
  Button,
} from '@chakra-ui/react';
import data from '../data/db.json';
import Card from '../components/Card';

export default function Shop() {
  const watches = useLoaderData();
  const [priceSliderValue, setPriceSliderValue] = useState([70000]);
  const allWatches = useMemo(() => [...watches.data], [watches.data]);
  const [filteredWatches, setFilteredWatches] = useState([...allWatches]);
  const [watchCategory, setWatchCategory] = useState('');

  useEffect(() => {
    // first we check if a category is applied because if not we want to show all watches
    setFilteredWatches(
      allWatches.filter((watch) =>
        watchCategory === ''
          ? Number(watch.price) <= priceSliderValue
          : watchCategory === watch.category && Number(watch.price) <= priceSliderValue,
      ),
    );
  }, [allWatches, priceSliderValue, watchCategory]);

  return (
    <>
      <GridItem
        as="aside"
        colSpan={{ base: 'auto', md: '1' }}
        rowSpan={{ base: '1', md: 'auto' }}
        bg="gray.100"
        minH={{ base: 'auto', md: '100vh' }}
      >
        <Flex p="30px" flexDirection="column" gap="40px" alignItems="center" textAlign="center">
          <Heading
            as={Button}
            size="lg"
            _hover={{ bg: 'transparent' }}
            onClick={() => setWatchCategory('')}
          >
            All products
          </Heading>

          <Button
            w="100%"
            onClick={(e) => setWatchCategory(e.target.id)}
            id="Diver"
            _active={{
              bg: '#dddfe2',
              borderColor: '#bec3c9',
              boxShadow: '0 0 1px 2px rgba(0, 0, 0, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
            _focus={{
              boxShadow: '0 0 1px 2px rgba(0, 0, 0, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
          >
            Diver watches
          </Button>

          <Button
            w="100%"
            id="Dress"
            onClick={(e) => setWatchCategory(e.target.id)}
            _active={{
              bg: '#dddfe2',
              borderColor: '#bec3c9',
            }}
            _focus={{
              boxShadow: '0 0 1px 2px rgba(0, 0, 0, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
          >
            Dress watches
          </Button>

          <Button
            w="100%"
            mb="1em"
            onClick={(e) => setWatchCategory(e.target.id)}
            id="Chronograph"
            _active={{
              bg: '#dddfe2',
              borderColor: '#bec3c9',
              boxShadow: '0 0 1px 2px rgba(0, 0, 0, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
            _focus={{
              boxShadow: '0 0 1px 2px rgba(0, 0, 0, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}
          >
            Chronograhs
          </Button>

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
        <Grid
          p="20px"
          gap={15}
          templateColumns="repeat(auto-fill, 300px)"
          justifyContent={{ base: 'center', md: 'start' }}
        >
          {allWatches &&
            filteredWatches.map((watch) => (
              <ScaleFade key={watch.id} in initialScale={0.1}>
                <Card key={watch.id} watchData={watch} />
              </ScaleFade>
            ))}
        </Grid>
      </GridItem>
    </>
  );
}

// below is done for practice just to test out React Router loaders
// technically not needed as we can directly access the JSON file
// the below func is also passed as a loader in the relevant Route in RoutesConfig.jsx
export const watchLoader = () => data;
