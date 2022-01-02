import React, { useState } from "react";
import data from "./data";
import { Box, Image, Container, Heading, Button } from "@chakra-ui/react";

const BirthdayList = () => {
  const [list, setList] = useState(data);
  return (
    <Box
      mt="100"
      boxShadow="dark-lg"
      p="6"
      rounded="md"
      bg="white"
      borderWidth="1px"
      borderRadius="5"
      //   overflow="hidden"
      bg="#fff"
      width="20%"
      ml="auto"
      mr="auto"
      p="20"

      //   display="block"
    >
      {/* <VStack> */}
      <Container maxW="container.lg" ml="15">
        <Heading as="h3" size="lg">
          {list.length} Most Important Personalities Birthday's
        </Heading>
        {list.map((item) => (
          <Box display="grid" gridTemplateColumns="auto 1fr">
            <Image
              src={item.image}
              alt={item.name}
              width="75px"
              height="75px"
              borderRadius="50%"
              objectFit="cover"
              mb="15"
            />
            <h4>{item.name}</h4>
            <p>Birthday on {item.age} </p>
          </Box>
        ))}
        <Button
          bg="#f28ab2"
          color="white"
          variant="solid"
          p="15"
          borderColor="transparent"
          textAlign="center"
          width="100%"
          borderRadius="5"
          onClick={() => setList([])}
        >
          Clear All
        </Button>
      </Container>
    </Box>
  );
};

export default BirthdayList;
