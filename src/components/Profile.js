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
} from "@chakra-ui/react";
// Assets
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

import ProfileBg from "assets/Profile.png";
import ProfileAvatar from "assets/ProfileImage.png";

function Product() {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");
  let secondaryText = useColorModeValue("gray.400", "gray.400");

  return (
    <Flex
      borderRadius='20px'
      bg={boxBg}
      p='20px'
      h='345px'
      w='345px'
      alignItems='center'
      direction='column'>
      <Image src={ProfileBg} maxW='100%' borderRadius='20px' />
      <Flex flexDirection='column' mb='30px'>
        <Image
          src={ProfileAvatar}
          mx='auto'
          border='5px solid red'
          borderColor={boxBg}
          width='68px'
          height='68px'
          mt='-38px'
          borderRadius='50%'
        />
        <Text
          fontWeight='bold'
          color={mainText}
          textAlign='center'
          fontSize='xl'>
          Adela Parkson
        </Text>
        <Text
          color={secondaryText}
          textAlign='center'
          fontSize='sm'
          fontWeight='500'>
          Product Designer
        </Text>
      </Flex>
      <Flex justify='space-between' w='100%' px='36px'>
        <Flex flexDirection='column'>
          <Text
            fontWeight='bold'
            color={mainText}
            fontWeight='bold'
            fontSize='xl'
            textAlign='center'>
            17
          </Text>
          <Text color={secondaryText} fontWeight='500' fontWeight='xs'>
            Posts
          </Text>
        </Flex>
        <Flex flexDirection='column'>
          <Text
            fontWeight='bold'
            color={mainText}
            fontWeight='bold'
            fontSize='xl'
            textAlign='center'>
            9.7k
          </Text>
          <Text color={secondaryText} fontWeight='500' fontWeight='xs'>
            Followers
          </Text>
        </Flex>
        <Flex flexDirection='column'>
          <Text
            fontWeight='bold'
            color={mainText}
            fontWeight='bold'
            fontSize='xl'
            textAlign='center'>
            274
          </Text>
          <Text color={secondaryText} fontWeight='500' fontWeight='xs'>
            Following
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Product;
