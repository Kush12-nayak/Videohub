import { Container, VStack ,Button, Heading, Input,Text, HStack} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container maxW={Container.xl} h={'100vh'} p={'16'}>
        <form>
            <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']}
            margin={'auto'}>
                <Heading textTransform={'uppercase'}>Welcome Back</Heading>
                <Input placeholder='Email' type={'email'} border={'none'} 
                borderBottom={'1px solid purple'} borderRadius={'none'}
                focusBorderColor={'none'} required/>
                <Input placeholder='password..' type={'password'}
                 border={'none'} 
                 borderBottom={'1px solid purple'} borderRadius={'none'}
                 focusBorderColor={'none'} required />
                 {/* <VStack alignItems={'flex-end'} cursor={'pointer'}>
                   <Text fontSize={'13'}>
                   <a href='signup' >Forgot Password ?</a>
                    </Text>
                 </VStack>
                 <Button color={'white'} colorScheme={'purple'}>
                        Login
                    </Button> */}
                    <Button variant={'link'} alignSelf={'flex-end'}>
                        <Link to={'/forgetpassword'}>Forget Password?</Link>
                    </Button>
                    <Button colorScheme={'purple'} type={'submit'}>
                        Login
                    </Button>
                    <Text textAlign={'right'}>
                        New User?{' '}
                        <Button variant={'link'} colorScheme={'purple'}>
                            <Link to={'/signup'}>Sign Up</Link>
                        </Button>
                    </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default Login