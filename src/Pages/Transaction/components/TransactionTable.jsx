import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Stack,
  } from '@chakra-ui/react'
function TransactionTable() {
    
    const tableData=[
       {
        id:"HD82NA2H",
        date:"2023-06-20",
        time:"07:00 AM",
        type:{
            name:"INR Deposit",
            tag:"E-Transfer"
        },
        amount:"+₹81,123",
        status:"Pending",
       },
       {
        id:"HD82NA2H",
        date:"2022-06-09",
        time:"02:48 PM",
        type:{
            name:"INR Withdraw",
            tag:"Wire Transfer",
        },
        amount:"-₹81,123",
        status:"Processing",

       },
       {
        id:"HD82NA2H",
        date:"2022-06-04",
        time:"09:21 AM",
        type:{
            name:"Buy",
           
        },
        amount:"+12.485133 BTC",
        status:"Cancelled",
       },
       {
        id:"HD82NA2H",
        date:"2022-06-03",
        time:"01:32 PM",
        type:{
          name:"Sell",
        },
        amount:"-0.364016 BTC",
        status:"Completed",
       },
       {
        id:"HD82NA2H",
        date:"2022-06-03",
        time:"01:32 PM",
        type:{
          name:"BTC Deposit",
        
        },
        amount:"+4.1394616 BTC",
        status:"Completed",
       },
       {
        id:"HD82NA2H",
        date:"2022-06-03",
        time:"01:32 PM",
        type:{
          name:"BTC Withdraw",
         
        },
        amount:"-10.0000000 BTC",
        status:"Completed",
       },
    ]

  return (
    <TableContainer>
    <Table variant='simple'>
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Date & Time</Th>
          <Th isNumeric>Type</Th>
          <Th isNumeric>Amount</Th>
          <Th isNumeric>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
      {
        tableData.map(data=>(
          <Tr key={data.id}>
            <Td>{data.id}</Td>
            <Td>
              <Stack>
                <Text>{data.date}</Text>
                <Text>{data.time}</Text>
              </Stack>
            </Td>
            <Td>
            {" "}
            <Stack>
              <Text>{data.type.name}</Text>
              <Text>{data.type?.tag}</Text>
            </Stack>
            </Td>
            <Td>{data.amount}</Td>
            <Td>{data.status}</Td>
          </Tr>
        ))
      }
      </Tbody>
    </Table>
  </TableContainer>
  )
}

export default TransactionTable