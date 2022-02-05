import React from "react";
// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Icon,
  Image,
  Link,
  Switch,
  Text,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
// Assets
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

function Product() {
  let boxBg = useColorModeValue("white", "navy.800");
  let mainText = useColorModeValue("gray.800", "white");
  let secondaryText = useColorModeValue("gray.400", "white");

  return (
    <Flex
      borderRadius='20px'
      bg={boxBg}
      p='20px'
      h='345px'
      w='345px'
      justifyContent='center'
      alignItems='center'>
      <Flex bg='red' flexDirection='column'>
        <Text color={mainText}>Adela Parkson</Text>
        <Text color={secondaryText}>Product Designer</Text>
      </Flex>
    </Flex>
  );
}

export default Product;
