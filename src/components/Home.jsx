import React from 'react'
import {Box, Container, Heading,Image, Stack,Text,} from "@chakra-ui/react"
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assests/1.jpg";
 import img2 from "../assests/2.jpg";
 import img3 from "../assests/3.jpg";
import img4 from "../assests/4.jpg";
import img5 from "../assests/5.png";

const headingoption={
  pos:"absolute",
  left:"40%",
  top:"10%",
  p:"4",
  textTransform:"uppercase"

}


const Home = () => {
  return (
    <Box>
      <MyCarousel/>
      <Container  maxW={"container.xl"} minH={'100vh'} p={'10'} border={'2px solid black'}>
      <Heading w={'fit-content'} borderBottom={'2px solid black'} m={'auto'}>
        Services
      </Heading>
      <Stack h={'full'} p={'2'} alignItems={'center'} direction={['column','row']}>
        <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}/>
        <Text letterSpacing={'widest'}
        lineHeight={'7'} p={['2','6']} textAlign={'center'}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti vel ratione repellat placeat totam, perspiciatis est consequatur rem itaque velit officiis beatae. Ea laborum est voluptatum voluptates placeat perspiciatis officia?
          Non adipisci consectetur qui illum. Velit veniam sapiente voluptate, nemo impedit explicabo delectus sint, totam facilis reiciendis fuga. Inventore facere eveniet illo aperiam explicabo esse dolore consectetur deserunt id minus.
          Laborum, obcaecati aperiam? Error temporibus tempora asperiores? Exercitationem nemo sunt explicabo, impedit voluptatibus dignissimos iure quia ducimus. Quam eum id possimus corrupti voluptatum pariatur, beatae iure dolor repellat. Laborum, saepe!
          Officia vitae sunt maxime, numquam eveniet provident quos omnis ipsam quasi doloribus ut. Laudantium et rem veritatis necessitatibus maxime ab corrupti libero, optio earum cupiditate officiis ullam nobis quia eveniet.
          Ipsam fugiat odit dicta a maiores nisi at cupiditate beatae doloribus fugit exercitationem quis totam numquam facere deserunt quidem, id nesciunt soluta eum. Pariatur expedita nisi facilis nulla eius unde.
          Laborum beatae autem esse labore nihil magnam sed minus adipisci nesciunt. Ut velit odit ducimus fugit ipsa eum, dolores aspernatur autem quidem inventore error dolor!
        </Text>
      </Stack>
      </Container>
      
    </Box>

  )
}

const MyCarousel=()=>(
  
  <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false} showThumbs={false} >
    <Box w={'full'} height={'100vh'}>
    <Image src={img1}  />
    <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingoption}>Watch The Future</Heading>
    </Box>
    <Box w={'full'} height={'100vh'}>
    <Image src={img2}  />
    <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingoption}>Future is Gaming</Heading>
    </Box>
    <Box w={'full'} height={'100vh'}>
    <Image src={img3}  />
    <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingoption}>Gaming on Console</Heading>
    </Box>
    <Box w={'full'} height={'100vh'}>
    <Image src={img4}  />
    <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingoption}>Night life is cool</Heading>
    </Box>

  </Carousel>

)

// const Footer=()=>(

//   // <Box bgColor={'blackAlpha.700'} minH={'25vh'}>
//   //   <Container w={'full'} p={['3','5']} border={'1px solid white'} minH={'20vh'} >
//   //     <VStack color={'white'}>
//   //       SUBSCRIBE TO GET UPDATES
//   //     </VStack>
//   //   </Container>
//   // </Box>

// )

export default Home