// Chakra imports

import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  DarkMode,
  Flex,
  Icon,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import avatar1 from "assets/avatars/avatar1.png";
import avatar2 from "assets/avatars/avatar2.png";
import avatar3 from "assets/avatars/avatar3.png";
import avatar4 from "assets/avatars/avatar4.png";

// Assets
import ProfileBg from "assets/Profile.png";
import ProfileAvatar from "assets/ProfileImage.png";
import TeamsBg from "assets/TeamsImage.png";
import VenusLogo from "assets/VenusLogo.png";
import React from "react";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { MdPeople, MdTimer, MdVideoLibrary } from "react-icons/md";

// Component Import
import Product from "./components/Product";
import Profile from "./components/Profile";
import Teams from "./components/Teams";
function App() {
  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let secondaryBg = useColorModeValue("gray.50", "whiteAlpha.100");
  let mainText = useColorModeValue("gray.800", "white");
  let secondaryText = useColorModeValue("gray.400", "gray.400");
  let iconBox = useColorModeValue("gray.100", "whiteAlpha.200");

  const profileCard = (
    <Flex
      borderRadius='20px'
      bg={boxBg}
      p='20px'
      me='20px'
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
          fontWeight='600'
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
            fontWeight='600'
            color={mainText}
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
            fontWeight='600'
            color={mainText}
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
            fontWeight='600'
            fontSize='xl'
            color={mainText}
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
  const teamsCard = (
    <Flex
      borderRadius='20px'
      bg={boxBg}
      me='20px'
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
  const productCard = (
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
          {/* {profileCard}
          {teamsCard}
          {productCard} */}
          {/* <Box me='20px'>
            <Profile />
          </Box>
          <Box me='20px'>
            <Teams />
          </Box>
          <Product /> */}
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
