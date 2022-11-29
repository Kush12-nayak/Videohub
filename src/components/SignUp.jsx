import React from 'react'
import { Container, VStack ,Button, Heading, Input,Text, HStack, Avatar} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Container maxW={Container.xl} h={'100vh'} p={'16'}>
        
        <form>
            <VStack spacing={' 8'} w={['full','96']}
            >
                <Heading textTransform={'uppercase'}>video hub</Heading>
                <Avatar alignItems={'center'} size={'xl'}/>

                <Input placeholder='Name' type={'text'} border={'none'} 
                borderBottom={'1px solid purple'} borderRadius={'none'}
                focusBorderColor={'none'} required/>
               
                <Input placeholder='Email' type={'email'} border={'none'} 
                borderBottom={'1px solid purple'} borderRadius={'none'}
                focusBorderColor={'none'} required/>
                <Input placeholder='password..' type={'password'}
                 border={'none'} 
                 borderBottom={'1px solid purple'} borderRadius={'none'}
                 focusBorderColor={'none'} required />
                    <Button colorScheme={'purple'} type={'submit'} w={'full'}>
                        Sign Up
                    </Button>
                    <Text textAlign={'right'}>
                        Already Signed Up?{' '}
                        <Button variant={'link'} colorScheme={'purple'}>
                            <Link to={'/login'}>Login</Link>
                        </Button>
                    </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default SignUp