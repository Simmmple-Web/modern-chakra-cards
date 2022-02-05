import React from "react";
// Chakra imports
import { Box, Flex, Button, useColorMode } from "@chakra-ui/react";
// Assets
//  Components
import Product from "./components/Product";
import Profile from "./components/Profile";
import Teams from "./components/Teams";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box h='100vh' w='100%'>
      <Flex
        flexDirection='column'
        maxW='80%'
        mx='auto'
        p='50px'
        bg='blue.100'
        borderRadius='20px'>
        <Button
          colorScheme='purple'
          onClick={toggleColorMode}
          mx='auto'
          mb='50px'>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>

        <Flex>
          <Box me='20px'>
            <Profile />
          </Box>
          <Teams />
          {/* <Product /> */}
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
