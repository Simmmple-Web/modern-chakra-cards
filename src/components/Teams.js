import React from "react";
// Chakra imports
import {
  Avatar,
  AvatarGroup,
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
import { MdPeople } from "react-icons/md";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import TeamsBg from "assets/TeamsImage.png";
import ProfileAvatar from "assets/ProfileImage.png";

function Product() {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");
  let secondaryText = useColorModeValue("gray.400", "gray.400");
  let iconBox = useColorModeValue("gray.100", "whiteAlpha.200");
  return (
    <Flex
      borderRadius='20px'
      bg={boxBg}
      p='20px'
      h='345px'
      w='345px'
      alignItems='center'
      direction='column'>
      <Flex align='center' w='100%' mb='18px'>
        <Flex
          w='38px'
          h='38px'
          align='center'
          justify='center'
          borderRadius='50%'
          me='12px'
          bg={iconBox}>
          <Icon w='24px' h='24px' as={MdPeople} color='purple.500' />
        </Flex>
        <Text
          fontWeight='bold'
          color={mainText}
          textAlign='center'
          fontSize='xl'
          me='auto'>
          Teams
        </Text>
        <Button
          w='38px'
          h='38px'
          align='center'
          justify='center'
          borderRadius='12px'
          me='12px'
          bg={iconBox}>
          <Icon
            w='24px'
            h='24px'
            as={IoEllipsisHorizontalSharp}
            color='purple.500'
          />
        </Button>
      </Flex>
      <Image src={TeamsBg} maxW='100%' borderRadius='20px' mb='10px' />
      <Text
        fontWeight='bold'
        color={mainText}
        textAlign='start'
        fontSize='xl'
        w='100%'>
        Simmmple Web
      </Text>
      <Flex justify='space-between' w='100%' px='36px'>
        <AvatarGroup size='md' max={2}>
          <Avatar src='https://bit.ly/ryan-florence' />
          <Avatar src='https://bit.ly/sage-adebayo' />
          <Avatar src='https://bit.ly/kent-c-dodds' />
          <Avatar src='https://bit.ly/prosper-baba' />
          <Avatar src='https://bit.ly/code-beast' />
        </AvatarGroup>
      </Flex>
    </Flex>
  );
}

export default Product;
