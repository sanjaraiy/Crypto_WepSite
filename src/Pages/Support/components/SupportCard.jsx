import React from "react";

import { Flex, Stack, Icon, Text, Box } from "@chakra-ui/react";

function SupportCard({leftComponent,icon,title,text}) {
  return (
    <Flex
      gap={6}
      mt="6"
      flexDir={{
        base: "column",
        lg: "row",
      }}
    >
      <Stack maxW="380px">
        <Icon as={icon} boxSize={6} color="p.purple"></Icon>
        <Text fontWeight="medium" as="h1" textStyle="h1">
          {title}
        </Text>
        <Text fontSize="sm" color="black.60">
         {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">
      {leftComponent}
      </Box>
    </Flex>
  );
}

export default SupportCard;
