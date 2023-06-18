/* eslint-disable jsx-a11y/aria-proptypes */
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  Fade,
  SimpleGrid,
  Grid,
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
  const [sliderValue, setSliderValue] = useState([10000]);
  // _focus={{ appearance: 'none', outlineColor: 'black' }}
  return (
    // we don't need to pass anything to the "in" prop as this is not a toggle element/component
    <Fade in>
      <Grid templateColumns="repeat(7, 1fr)">
        <GridItem as="aside" colSpan="1" bg="gray.100" minH="100vh">
          <Flex p="30px" flexDirection="column" gap="50px">
            <Heading size="lg">All products</Heading>
            <List spacing={3}>
              <ListItem>Diver watches</ListItem>
              <ListItem>Dress watches</ListItem>
            </List>
            <RangeSlider
              aria-label={['min', 'max']}
              defaultValue={[10000]}
              colorScheme="blackAlpha"
              min={1000}
              max={90000}
              step={5000}
              onChange={(value) => setSliderValue(value)}
            >
              <RangeSliderMark value={1000} mt="3" fontSize="xs" ml="-4">
                €1000
              </RangeSliderMark>
              <RangeSliderMark value={90000} mt="3" fontSize="xs" ml="-8">
                €90000
              </RangeSliderMark>
              <RangeSliderMark
                value={sliderValue[0]}
                mt="-45px"
                ml={sliderValue[0] < 20000 ? '-3.5' : '-5'}
                w="15"
                color="gray.100"
                fontSize="sm"
                p="4px"
                fontWeight="bold"
                bg="blackAlpha.900"
                borderRadius="8px"
              >
                €{sliderValue[0] / 1000}k
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
        <GridItem as="main" colSpan="6">
          <SimpleGrid p="20px" spacing={15} minChildWidth="300px">
            {watches.data && watches.data.map((watch) => <Card key={watch.id} watchData={watch} />)}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Fade>
  );
}

// below is done for practice just to test out React Router loaders
// the below func is passed as a loader in the relevant Route in RoutesConfig.jsx
export const watchLoader = () => data;
