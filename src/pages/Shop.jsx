import { useLoaderData } from 'react-router-dom';
import { Fade, SimpleGrid } from '@chakra-ui/react';
import data from '../data/db.json';
import Card from '../components/Card';

export default function Shop() {
  const watches = useLoaderData();

  return (
    // we don't need to pass anything to the "in" prop as this is not a toggle element/component
    <Fade in>
      <SimpleGrid p="20px" spacing={15} minChildWidth="300px">
        {watches.data && watches.data.map((watch) => <Card key={watch.id} watchData={watch} />)}
      </SimpleGrid>
    </Fade>
  );
}

// below is done for practice just to test out React Router loaders
// the below func is passed as a loader in the relevant Route in RoutesConfig.jsx
export const watchLoader = () => data;
