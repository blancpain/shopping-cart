import { Box } from '@chakra-ui/react';
import watch from '../assets/watch.mp4';

export default function Home() {
  const videoStyles = {
    transform: 'rotate(180deg)',
    h: '100%',
    w: '100%',
    objectFit: 'cover',
  };

  return (
    <Box
      as="video"
      autoPlay
      loop
      muted
      sx={videoStyles}
      src={watch}
      alt="Video of watch mechanism"
    />
  );
}
