import { ScaleFade } from '@chakra-ui/react';
import historiques from '../assets/watches/historiques.avif';

export default function Shop() {
  return (
    // we don't need to pass anything to "in" prop as this is not a toggle element/component
    <ScaleFade initialScale={0.1} in>
      <div>
        <img src={historiques} alt="" />
      </div>
    </ScaleFade>
  );
}

// Shop will have a side bar + main (grid made of Cards)
