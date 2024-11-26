"use client";

import BingoBall from "@/components/BingoBall";
import MasterBoard from "@/components/MasterBoard";
import PreviousCalls from "@/components/PreviousCalls";
import { useState } from "react";
import { Box, Container, Flex, styled, VStack } from "styled-system/jsx";

export default function BingoCallerPage({ balls }) {
  const [callIdx, setCallIdx] = useState(0);

  return (
    <styled.main w="full" bg="gray.200">
      <Container maxW="1200px" pt="8" pb="20">
        <styled.h1 textStyle="h1">Bingo</styled.h1>

        <Flex w="full" gap="8" flexDir={["column", null, null, "row"]}>
          <Flex
            flex="1"
            gap="4"
            flexDir="column"
            textAlign="center"
            justify="start"
            alignItems="center"
          >
            <Flex gap="2" flexDir={["row", null, null, "column"]} w="full">
              <VStack w="full" p="4" bg="gray.600" borderRadius="lg">
                <styled.h5 textStyle="h5">current ball:</styled.h5>
                <BingoBall ball={balls[callIdx]} ballSize="lg" />
              </VStack>

              <VStack w="full" h="100%" gap="2">
                <styled.div
                  p={["2", "4"]}
                  bg="gray.600"
                  borderRadius="lg"
                  w="full"
                  height="fit-content"
                >
                  <styled.h5 textStyle="h5" w="full">
                    total calls: {callIdx + 1}
                  </styled.h5>
                </styled.div>
                <styled.button
                  py="1"
                  px="4"
                  w="full"
                  borderWidth="2px"
                  borderColor="slate.500"
                  borderRadius="full"
                  onClick={() => setCallIdx(callIdx + 1)}
                  textStyle="h5"
                >
                  Next Ball
                </styled.button>
                <Box alignSelf="end" pt="8">
                  <styled.button
                    py="1"
                    px="4"
                    w="full"
                    borderWidth="2px"
                    borderColor="slate.500"
                    borderRadius="full"
                    // onClick={() => }
                    textStyle="p"
                    hideFrom="lg"
                  >
                    Previous Balls
                  </styled.button>
                </Box>
              </VStack>
            </Flex>

            <Box p="4" bg="gray.600" borderRadius="lg" w="full" hideBelow="lg">
              <PreviousCalls balls={balls} callIdx={callIdx} />
            </Box>
          </Flex>

          <Box w="full" flex="3">
            <MasterBoard ball={balls[callIdx]} />
          </Box>
        </Flex>
      </Container>

      {/* <styled.section>
        <Container maxW="1264px">
          <MasterBoard ball={balls[callIdx]} />
        </Container>
      </styled.section> */}
    </styled.main>
  );
}
