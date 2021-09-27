import React from 'react';
import { Box, Flex, Button, Heading, Spacer, Container, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="white" px={4} borderBottom="1px" borderColor="gray.200" position="sticky" top={0} zIndex={10}>
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Heading size="md" color="purple.600">
            <Link to="/">Evently</Link>
          </Heading>
          
          <Spacer />
          
          <Flex alignItems="center">
            <ChakraLink as={Link} to="/" px={4} fontSize="sm" fontWeight="medium">
              Discover
            </ChakraLink>
            <ChakraLink as={Link} to="/dashboard" px={4} fontSize="sm" fontWeight="medium">
              My Tickets
            </ChakraLink>
            <Button as={Link} to="/create" colorScheme="purple" size="sm" ml={4}>
              Create Event
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
