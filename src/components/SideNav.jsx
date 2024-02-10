import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrTransaction } from "react-icons/gr";
import { MdSupportAgent } from "react-icons/md";

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
    <Stack justify="space-between" boxShadow="lg" maxW="16rem" h="100vh">
      <Box w="250px">
        <Heading textAlign="center" fontSize="20px" as="h1" pt="40px">
          @CODEAURCODING
        </Heading>
        <Box mt="4" mx="3">
          {navLinks.map((nav) => (
            <HStack
              key={nav.text}
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
          ))}
        </Box>
      </Box>

      <Box mt="4" mx="3" mb="6">
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
      </Box>
    </Stack>
  );
}

export default SideNav;
