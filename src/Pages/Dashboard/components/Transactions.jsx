import React, { Fragment } from "react";
import { CustomCard } from "../../../components/chakra/CustomCard";
import { Stack, Text, Flex, Box, Icon, Grid, Divider, Button } from "@chakra-ui/react";
import { FaRupeeSign } from "react-icons/fa";
import { FaBtc } from "react-icons/fa";

function Transactions() {
  const transactions = [
    {
      id: "1",
      icon: FaRupeeSign,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC Sell",
      amount: "- 12.4855213391 BTC",
      timestamp: "2022-05-27 12:32 PM",
    },
    {
      id: "3",
      icon: FaRupeeSign,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard mt="5px" h="full">
      <Text fontSize="sm" color="black.80" mb="6">
        Recent Transactions
      </Text>
      <Stack >
        {transactions.map((transaction,i) => (
          <Fragment key={transaction.id}>
          {i!==0 && <Divider mt="4"></Divider>}
            <Flex  gap="4" w="full">
              <Grid
                placeItems="center"
                bg="black.5"
                boxSize={10}
                borderRadius="full"
              >
                <Icon as={transaction.icon}></Icon>
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{transaction.text}</Text>
                  <Text fontSize="sm" color="black.80">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle="h6">{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button w="full" colorScheme="gray" mt="6" >View All</Button>
    </CustomCard>
  );
}

export default Transactions;
