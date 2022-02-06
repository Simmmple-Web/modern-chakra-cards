import React from "react";
// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Button,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import { MdTimer, MdVideoLibrary } from "react-icons/md";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import VenusLogo from "assets/VenusLogo.png";
import avatar1 from "assets/avatars/avatar1.png";
import avatar2 from "assets/avatars/avatar2.png";
import avatar3 from "assets/avatars/avatar3.png";
import avatar4 from "assets/avatars/avatar4.png";

function Product() {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let secondaryBg = useColorModeValue("gray.50", "whiteAlpha.100");
  let mainText = useColorModeValue("gray.800", "white");
  let secondaryText = useColorModeValue("gray.400", "gray.400");
  let iconBox = useColorModeValue("gray.100", "whiteAlpha.200");
  return (
    <Flex borderRadius='20px' bg={boxBg} h='345px' w='345px' direction='column'>
      <Box p='20px'>
        <Flex w='100%' mb='10px'>
          <Image src={VenusLogo} me='auto' />
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
        <Box>
          <Text fontWeight='600' color={mainText} w='100%' fontSize='2xl'>
            Venus Product
          </Text>
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
        </Box>
      </Box>
      <Flex
        bg={secondaryBg}
        w='100%'
        p='14px 20px'
        borderBottomLeftRadius='inherit'
        borderBottomRightRadius='inherit'
        height='100%'
        direction='column'>
        <Text
          fontSize='sm'
          color='gray.500'
          lineHeight='24px'
          pe='40px'
          fontWeight='500'
          mb='auto'>
          You have the opportunity to play this game of life you need to
          appreciate every moment.
        </Text>
        <Flex>
          <Flex me='25px'>
            <Icon as={MdTimer} w='20px' h='20px' me='6px' color='green.400' />
            <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
              85 mins
            </Text>
          </Flex>
          <Flex>
            <Icon
              as={MdVideoLibrary}
              w='20px'
              h='20px'
              me='6px'
              color='red.500'
            />
            <Text color={mainText} fontSize='sm' my='auto' fontWeight='500'>
              Video Format
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Product;
