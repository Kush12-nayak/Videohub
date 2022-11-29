import React from 'react'
import {Box, Button, Heading, HStack, Stack, VStack,Input,Text} from "@chakra-ui/react"
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.800'} minH={'30vh'} p='16' color={'white'}>
        <Stack  direction={["column","row"]}>
            <VStack alignItems={'stretch'} w={'full'}>
                <Heading size={'md'} textAlign={['center','left']}>
                    SUBSCRIBE FOR MORE UPDATES
                </Heading>
                <HStack  p={'2'}
                borderBottom={'2px solid white'} >
                <Input  focusBorderColor='none'  placeholder='Enter Email here...' border={'none'} 
                borderRadius={"none"}/>
                <Button colorScheme={"purple"} p={"0"} size={'lg'}                
                 variant={'ghost'} bgColor={'whiteAlpha.500'} borderRadius={'0 20px 20px 0'}>
                    <AiOutlineSend/>
                </Button>
            </HStack>
            </VStack>
            <VStack w={'full'} borderLeft={["none","1px solid white"]}
            borderRight={["none","1px solid white"]}>
                <Heading textTransform={'uppercase'} textAlign={'center'} size={'md'}>
                    Video Hub
                </Heading>
                <Text m={'5'}>
                        All rights Recieved
                    </Text>

            </VStack>
            <VStack w={'full'}>
            <Heading textTransform={'uppercase'} textAlign={'center'} size={'md'}>
                    Social Media
                </Heading>
                <Button colorScheme={'purple'} variant={'link'}>
                    <a href="http://www.youtube.com/" >Youtube</a>
                </Button>
                <Button colorScheme={'purple'} variant={'link'}>
                    <a href="http://www.instagram.com/" >Instagram</a>
                </Button>
                <Button colorScheme={'purple'} variant={'link'}>
                    <a href="http://www.github.com/" >Github</a>
                </Button>
            </VStack>
            
        </Stack>
    </Box>
  )
}

export default Footer