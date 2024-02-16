import React from 'react'

import { Tag,Text } from '@chakra-ui/react'
import { CustomCard } from '../../../components/chakra/CustomCard'
function InfoCard({imgUrl,text,tagText,inverted}) {
  return (
    <CustomCard
    bgColor={inverted ? "p.purple" : "white"}
    bgImage={imgUrl}
    bgSize="cover" 
    bgRepeat="no-repeat"
    >

        <Tag 
        bg={inverted ? "white" : "p.purple"}
        color={inverted ? "p.purple" : "white"} 
        borderRadius="full" cursor="pointer">{tagText}</Tag>
        <Text mt="4" fontWeight="medium" textStyle="h5"
         color={inverted ? "white" : "black.80"}
        >
           {text}
        </Text>
    </CustomCard>
  )
}

export default InfoCard