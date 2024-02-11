import { HStack, Icon, Stack, Text, Tag, Button } from "@chakra-ui/react";
import { IoMdInformationCircle } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
import React from "react";

function PorfolioSection() {
  return (
    <HStack justify="space-between" bg="white" borderRadius="xl" p="6" spacing={12}>
      <HStack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="14px">Total Portfolio Value</Text>
            <Icon as={IoMdInformationCircle}></Icon>
          </HStack>
          <Text textStyle="h2">₹ 112,312.24</Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack>
            <HStack>
              <Text textStyle="h2">22.3940100</Text>
              <Tag>BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2">₹ 1,300.00</Text><Tag>INR</Tag>
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
