import { Fade, Grid } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export default function ShopLayout() {
  return (
    // we don't need to pass anything to the "in" prop as this is not a toggle element/component
    <Fade in>
      <Grid
        templateRows={{ base: 'repeat(16, 1fr)', md: 'auto' }}
        templateColumns={{ base: 'auto', md: 'repeat(7, 1fr)' }}
      >
        <Outlet />
      </Grid>
    </Fade>
  );
}
