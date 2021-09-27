import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';

const Placeholder = ({ title }) => (
  <Box p={10} textAlign="center">
    <h1>{title}</h1>
    <p>Component implementation in progress...</p>
  </Box>
);

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Box as="main" minH="100vh">
          <Switch>
            <Route exact path="/" component={() => <Placeholder title="Event Discovery" />} />
            <Route path="/event/:id" component={() => <Placeholder title="Event Details" />} />
            <Route path="/dashboard" component={() => <Placeholder title="User Dashboard" />} />
            <Route path="/create" component={() => <Placeholder title="Create Event" />} />
          </Switch>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
