import {
  Flex,
  Container,
  Box,
  Heading,
  Menu,
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  HStack,
   Icon,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa6";

import { FaCircleUser } from "react-icons/fa6";

function TopNav({title,onOpen}) {
  return (
    <Box px="4" bg="white">
      <HStack maxW="55rem" mx="auto"  h="16" justify="space-between">
    <Icon as={FaBars} onClick={onOpen} cursor="pointer"
      display={{
              base:"block",
              lg:"none"
            }} 
    ></Icon>
        <Heading fontSize="28px">{title}</Heading>
        <Menu>
          <MenuButton>
            <Icon fontSize="30px"  as={FaCircleUser}></Icon>
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
           
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}

export default TopNav;
