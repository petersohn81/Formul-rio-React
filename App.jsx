import {
  
  Flex,
  Box, 
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";

function App() {
  
  return (
    
    <Box h="100vh">
      <Center 
        as="header"
        h={150}
        bg= "darkviolet"
        color="black"
        fontweight="bold"
        fontSize="4xl"
        pb="8">
        Cadastro de Usuário
      </Center> 
      <Flex 
        align="center"
        justify="center"
        bg= "black"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={200}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
          > <FormControl display="flex" flexDir="column" gap="4">
              
                <Box w="100%">
                  <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                  <Input id="nome" />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" type="email" />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="senha">Senha</FormLabel>
                  <Input id="senha" type="senha" />
                </Box>
           
          </FormControl>
        </Center>
      </Flex>
    </Box>
    
  )
}

export default App
