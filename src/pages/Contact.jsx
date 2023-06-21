import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Stack,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  Fade,
  Text,
} from '@chakra-ui/react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export default function Contact() {
  const { hasCopied, onCopy } = useClipboard('example@fake.com');

  return (
    <Fade in>
      <Flex align="top" justify="center" id="contact" py="3rem">
        <Box borderRadius="lg" m={{ base: 5, md: 16, lg: 10 }} p={{ base: 5, lg: 16 }}>
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Heading
                fontSize={{
                  base: '4xl',
                  md: '6xl',
                }}
              >
                Get in Touch
              </Heading>

              <Stack spacing={{ base: 4, md: 8, lg: 20 }} direction={{ base: 'row', md: 'row' }}>
                <Stack align="center" justify="space-around" direction={{ base: 'row', md: 'row' }}>
                  <Tooltip
                    label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                    closeOnClick={false}
                    hasArrow
                  >
                    <IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: 'blue.500',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>

                  <Link href="https://github.com/blancpain">
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<BsGithub />}
                      _hover={{
                        bg: 'blue.500',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      isRound
                    />
                  </Link>

                  <Link as={NavLink} to="/contact">
                    <IconButton
                      aria-label="twitter"
                      variant="ghost"
                      size="lg"
                      icon={<BsTwitter size="28px" />}
                      _hover={{
                        bg: 'blue.500',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      isRound
                    />
                  </Link>

                  <Link as={NavLink} to="/contact">
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      icon={<BsLinkedin size="28px" />}
                      _hover={{
                        bg: 'blue.500',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      isRound
                    />
                  </Link>
                </Stack>
              </Stack>
              <VStack>
                <Text fontWeight="bold" fontSize="2xl">
                  WatchCo
                </Text>
                <Text>Sofia, Bulgaria</Text>
              </VStack>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Fade>
  );
}
