import { HStack, Icon, Stack, Text, Tag, Button } from "@chakra-ui/react";
import { IoMdInformationCircle } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
import React from "react";

function PorfolioSection() {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
      flexDir={{
        base: "column",
        xl: "row",
      }}
      align={{
        base:"flex-start",
        md:"center",
      }}
    >
      <HStack 
        spacing={12}
        flexDir={{
        base: "column",
        md:"row"
      }}
        align={{
          base:"flex-start",
          md:"center",
        }}
        
      
      
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="14px">Total Portfolio Value</Text>
            <Icon as={IoMdInformationCircle}></Icon>
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            ₹ 112,312.24
          </Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack spacing={2}>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.3940100
              </Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                ₹ 1,300.00
              </Text>
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button>
          <Icon as={MdOutlineFileDownload}></Icon>
          <span>Desposit</span>
        </Button>
        <Button>
          <Icon as={MdOutlineFileUpload}></Icon>
          <span>Withdraw</span>
        </Button>
      </HStack>
    </HStack>
  );
}

export default PorfolioSection;
