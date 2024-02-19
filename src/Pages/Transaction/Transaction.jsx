import { Flex, Button, Card, Icon, HStack } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { MdOutlineFileDownload } from "react-icons/md";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tag,
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import TransactionTable from "./components/TransactionTable";

function TransactionPage() {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 213,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];
  return (
    <DashboardLayout title="Transactions" >
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={MdOutlineFileDownload}></Icon>}>
          Export CSV
        </Button>
      </Flex>
      <Card>
        <Tabs>
          <TabList pt="4" display="flex" justifyContent="space-between">
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW="250px" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={IoSearch}></Icon>
              </InputLeftElement>
              <Input type="tel" placeholder="Search here..." />
            </InputGroup>

          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable></TransactionTable>
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
}

export default TransactionPage;
