import { Button, color, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCloudUpload} from "react-icons/ai"

const Upload = () => {
  return (
    <Container maxW={"container.xl"} height={'100vh'} p={'16'}>
        <VStack justifyContent={'center'} h={'full'} color={'purple.500'}>
        <AiOutlineCloudUpload size={["7vmax"]}/>
        <form>
            <HStack>
                <Input required type={'file'} css={{
                    '&::file-selector-button':{
                        width:"calc(100% + 36px)",
                        height:"100%",
                        marginLeft:'-18px',
                        border:"none",
                        color:'purple',
                        backgroundColor:'white',
                        cursor:'pointer'
                    }
                }
                }/>
                <Button colorScheme={'purple'} type={'submit'}>upload</Button>
            </HStack>
        </form>
        </VStack>
    </Container>
  )
}

export default Upload