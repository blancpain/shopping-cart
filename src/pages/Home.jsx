import { Box } from '@chakra-ui/react';
import introVideo from '../assets/introVideo.mp4';

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
      src={introVideo}
      alt="Video of watch mechanism"
    />
  );
}
