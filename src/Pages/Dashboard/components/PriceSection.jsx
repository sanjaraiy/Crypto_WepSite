import React from "react";
import { CustomCard } from "../../../components/chakra/CustomCard";
import {
  Flex,
  HStack,
  Stack,
  Text,
  Tag,
  Icon,
  Button,
  Image,
  TabList,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import { CiCircleMinus } from "react-icons/ci";

function PriceSection() {
  const timestmps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];

  return (
    <CustomCard mt="20px">
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Current Balances</Text>
          </HStack>
          <HStack spacing={2}>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.3940100
              </Text>
              <HStack fontWeight="medium" color="green.400">
                <Icon as={BsArrowUpRight}></Icon>
                <Text fontSize="sm" fontWeight="medium">
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button>
            <Icon as={IoAddCircleOutline}></Icon>
            <span>Buy</span>
          </Button>
          <Button>
            <Icon as={CiCircleMinus}></Icon>
            <span>Sell</span>
          </Button>
        </HStack>
      </Flex>
      <Tabs variant="enclosed" mt="10px">
       <Flex justify="end">
       <TabList>
          {
            ["1H","1D","1W","1M"].map((tab)=>(
                <Tab key={tab} fontSize="sm" p="6px" borderRadius="4" _selected={{bg:"black.5"}}>{tab}</Tab>
            ))
          }
          
        </TabList>
       </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="/Image/Graph.png" mt="40px"></Image>
            <HStack justify="space-between" mt="10px">
              {timestmps.map((timestmp) => (
                <Text key={timestmp} fontSize="sm" color="black.80">
                  {timestmp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
}

export default PriceSection;
