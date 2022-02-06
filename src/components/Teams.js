import React from "react";
// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Badge,
  Flex,
  Button,
  Icon,
  Image,
  Text,
  DarkMode,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import { MdPeople } from "react-icons/md";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import TeamsBg from "assets/TeamsImage.png";
import avatar1 from "assets/avatars/avatar1.png";
import avatar2 from "assets/avatars/avatar2.png";
import avatar3 from "assets/avatars/avatar3.png";
import avatar4 from "assets/avatars/avatar4.png";

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
      <Flex w='100%' mb='18px'>
        <Flex
          w='38px'
          h='38px'
          align='center'
          justify='center'
          borderRadius='50%'
          me='12px'
          bg={iconBox}>
          <Icon w='24px' h='24px' as={MdPeople} color='brand.200' />
        </Flex>
        <Text
          my='auto'
          fontWeight='600'
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
            color='brand.200'
          />
        </Button>
      </Flex>
      <Image src={TeamsBg} maxW='100%' borderRadius='20px' mb='10px' />
      <Text
        fontWeight='600'
        color={mainText}
        textAlign='start'
        fontSize='xl'
        w='100%'>
        Simmmple Web
      </Text>
      <Flex mt='auto' justify='space-between' w='100%' align='center'>
        <DarkMode>
          <Badge
            borderRadius='9px'
            size='md'
            bg='green.50'
            color='green.400'
            textAlign='center'
            display='flex'
            justifyContent='center'
            alignItems='center'>
            Design
          </Badge>
        </DarkMode>
        <AvatarGroup
          size='sm'
          max={4}
          color='brand.200'
          fontSize='9px'
          fontWeight='700'>
          <Avatar src={avatar1} />
          <Avatar src={avatar2} />
          <Avatar src={avatar3} />
          <Avatar src={avatar4} />
          <Avatar src={avatar1} />
          <Avatar src={avatar2} />
          <Avatar src={avatar3} />
          <Avatar src={avatar4} />
          <Avatar src={avatar1} />
          <Avatar src={avatar2} />
          <Avatar src={avatar3} />
          <Avatar src={avatar4} />
          <Avatar src={avatar1} />
          <Avatar src={avatar2} />
          <Avatar src={avatar3} />
          <Avatar src={avatar4} />
          <Avatar src={avatar1} />
          <Avatar src={avatar2} />
          <Avatar src={avatar3} />
          <Avatar src={avatar4} />
          <Avatar src={avatar1} />
          <Avatar src={avatar2} />
        </AvatarGroup>
      </Flex>
    </Flex>
  );
}

export default Product;
