import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrTransaction } from "react-icons/gr";
import { MdSupportAgent } from "react-icons/md";
import {Link} from "react-router-dom";

function SideNav() {
  const navLinks = [
    {
      icon: LuLayoutDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (


    <Stack 
    bg="white"
    justify="space-between" boxShadow={{
      base:"none",
      lg:"lg",
    }} 
    w={{
      base:"full",
      lg:"16rem",
    }}
    h="100vh"
    //  h="100vh"
      
    >
      <Box w="250px">
        <Heading textAlign="center" fontSize="20px" as="h1" pt="40px">
          @CODEAURCODING
        </Heading>
        <Box mt="4" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
                <HStack
                  mx="12px"
                  py="3"
                  px="4"
                  color="#797E82"
                  _hover={{
                    bg: "#F3F3F7",
                    cursor: "pointer",
                    borderRadius: "5px",
                    color: "#474545",
                  }}
                >
                  <Icon as={nav.icon}></Icon>
                  <Text fontSize="14px" fontWeight="medium" color="#797E82">
                    {nav.text}
                  </Text>
                </HStack>
            </Link>
              ))}
            </Box>
          </Box>

          <Box mt="4" mx="3" mb="6">
           <Link to="/support">
            <HStack
                mx="12px"
                py="3"
                px="4"
                color="#797E82"
                _hover={{
                  bg: "#F3F3F7",
                  cursor: "pointer",
                  borderRadius: "5px",
                  color: "#474545",
                }}
              >
                <Icon as={MdSupportAgent}></Icon>
                <Text fontSize="14px" fontWeight="medium" color="#797E82">
                  Support
                </Text>
              </HStack>
           </Link>
          </Box>
    </Stack>
  );
}

export default SideNav;
