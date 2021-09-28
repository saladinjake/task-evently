import React, { useState, useEffect } from 'react';
import { Box, Container, Heading, SimpleGrid, Image, Text, Stack, Badge, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Mock data
    setEvents([
      { _id: '1', title: 'Tech Conference 2021', date: '2021-11-15', location: 'San Francisco, CA', price: 299, category: 'Technology', capacity: 500, ticketsSold: 320, image: 'https://images.unsplash.com/photo-1505373633560-fa0a51989435?q=80&w=800' },
      { _id: '2', title: 'Music Festival', date: '2021-10-20', location: 'Austin, TX', price: 150, category: 'Music', capacity: 1000, ticketsSold: 850, image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800' },
      { _id: '3', title: 'Cooking Workshop', date: '2021-12-05', location: 'Chicago, IL', price: 75, category: 'Food', capacity: 30, ticketsSold: 25, image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800' }
    ]);
  }, []);

  return (
    <Container maxW="container.xl" py={10}>
      <Flex direction="column" mb={10} textAlign="center">
        <Heading size="2xl" mb={4}>Discover Incredible Events</Heading>
        <Text fontSize="xl" color="gray.600">Find and book the best experiences near you</Text>
      </Flex>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {events.map(event => (
          <Box key={event._id} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" _hover={{ shadow: 'md', transition: '0.2s' }}>
            <Image src={event.image} alt={event.title} h="200px" w="100%" objectFit="cover" />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="purple">
                  {event.category}
                </Badge>
                <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                  {new Date(event.date).toLocaleDateString()} &bull; {event.location}
                </Box>
              </Box>

              <Box mt="1" fontWeight="bold" as="h4" lineHeight="tight" isTruncated fontSize="lg">
                {event.title}
              </Box>

              <Box mt={2}>
                <Text fontSize="xl" fontWeight="bold" color="purple.600">${event.price}</Text>
              </Box>

              <Stack direction="row" mt={4} spacing={4}>
                <Button as={Link} to={`/event/${event._id}`} colorScheme="purple" variant="outline" size="sm" flex={1}>
                  Details
                </Button>
                <Button colorScheme="purple" size="sm" flex={1}>
                  Book Now
                </Button>
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Home;
