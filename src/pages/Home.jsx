import { NavLink } from 'react-router-dom';
import { Box, Button, AbsoluteCenter } from '@chakra-ui/react';

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
        src="assets/introVideo.mp4"
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
          fontSize={{
            base: 'xl',
            md: '3xl',
            lg: '4xl',
          }}
          letterSpacing={{ base: '0px', md: '3px' }}
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
