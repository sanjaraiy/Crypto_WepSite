import { Flex, Button, Card, Icon } from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { MdOutlineFileDownload } from "react-icons/md";
import { Tabs, TabList, TabPanels, Tab, TabPanel,Tag } from '@chakra-ui/react'

import TransactionTable from "./components/TransactionTable";

function TransactionPage() {
   const tabs=[
    {
      name:"All",
      count:349,
    },
    {
      name:"Deposit",
      count:114,
    },
    {
      name:"Withdraw",
      count:213,
    },
    {
      name:"Trade",
      count:22,
    }
   ]
  return (
    <DashboardLayout>
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={MdOutlineFileDownload}></Icon>}>
          Export CSV
        </Button>
      </Flex>
      <Card>
        <Tabs>
          <TabList pt="4">
          {
            tabs.map((tab)=>(
              <Tab key={tab.name} display="flex" gap="2">
                {tab.name} <Tag colorScheme="gray" borderRadius="full">{tab.count}</Tag>
              </Tab>
            ))
          }
            
          </TabList>
          <TabPanels>
            <TabPanel>
               <TransactionTable></TransactionTable>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
}

export default TransactionPage;
