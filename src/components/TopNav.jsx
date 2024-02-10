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

import { FaCircleUser } from "react-icons/fa6";

function TopNav() {
  return (
    <Box boxShadow="xl">
      <HStack maxW="960px" mx="auto"  h="16" justify="space-between" px="32">
        <Heading fontSize="28px">Dashboard</Heading>
        <Menu>
          <MenuButton>
            <Icon fontSize="30px"  as={FaCircleUser}></Icon>
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}

export default TopNav;
