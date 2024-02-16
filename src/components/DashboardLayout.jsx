import { Box,Container,Flex, useDisclosure } from "@chakra-ui/react"
import SideNav from "./SideNav"
import TopNav from "./TopNav"
import SideDrawer from "./SideDrawer";

function DashboardLayout({title,children}) {
    const {isOpen,onClose,onOpen}=useDisclosure();
  return (
   
        <Flex>
            <Box
             display={{
             base:"none",
             lg:"flex"
              }}
            >
                <SideNav></SideNav>
            </Box>
            <SideDrawer  isOpen={isOpen} onClose={onClose}></SideDrawer>
            <Box flexGrow={1}>
                <TopNav title={title} onOpen={onOpen}></TopNav>
                <Container overflowX="hidden" overflowY="auto" h="calc(100vh - 88px)" mt="6px" maxW="60rem" px="4">{children}</Container>
            </Box>
        </Flex>
    
  )
}

export default DashboardLayout