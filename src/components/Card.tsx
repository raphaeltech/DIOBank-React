import { Box, Button, Center, Heading, Input, Stack } from "@chakra-ui/react"
import { login } from "../services/login"
import { DButton } from "./Dbutton"


export const Card = () => {
  return(
    <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
        <Stack spacing={3}>
          <Center>
          <Heading>Faça login!</Heading>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <DButton onClick={login}/>          
          </Center>
          </Stack>
        </Box>
      </Box>
  )
}