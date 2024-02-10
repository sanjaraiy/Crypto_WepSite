import { Flex,Box } from "@chakra-ui/react"
import SideNav from "../../components/SideNav"
import TopNav from "../../components/TopNav"




function Dashboard() {
  return (
      <>
        <Flex>
            <SideNav></SideNav>
            <Box flexGrow={1}>
                <TopNav></TopNav>
            </Box>
        </Flex>
      </>
  )
}

export default Dashboard