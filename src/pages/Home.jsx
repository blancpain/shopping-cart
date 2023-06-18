import { NavLink } from 'react-router-dom';
import { Box, Button, AbsoluteCenter } from '@chakra-ui/react';
import introVideo from '../assets/introVideo.mp4';

export default function Home() {
  const videoStyles = {
    transform: 'rotate(180deg)',
    h: '100%',
    w: '100%',
    objectFit: 'cover',
  };

  return (
    <>
      <Box
        as="video"
        autoPlay
        loop
        muted
        sx={videoStyles}
        src={introVideo}
        alt="Video of watch mechanism"
      />
      <AbsoluteCenter>
        <Button
          as={NavLink}
          to="/shop"
          bg="transparent"
          color="gray.200"
          size="lg"
          border="2px solid white"
          p="25px"
          fontSize="4xl"
          letterSpacing="3px"
          _hover={{
            border: 'none',
            filter: 'opacity(65%)',
            backgroundColor: 'gray.200',
            color: 'black',
          }}
        >
          Enter the world of luxury watches
        </Button>
      </AbsoluteCenter>
    </>
  );
}
