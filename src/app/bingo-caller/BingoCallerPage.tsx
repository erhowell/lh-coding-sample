"use client";

import MasterBoard from "@/components/MasterBoard";
import generateRandomNumberArray from "@/lib/logic/generateRandomNumberArray";
import { useEffect, useState } from "react";
import { Container, styled } from "styled-system/jsx";

function createRows(n: number, m: number) {
  const row: BoardColumn = { numbers: [] };
  for (n; n <= m; n++) {
    row.numbers.push({ value: n, marked: false });
  }
  return row;
}

function generateBingoBalls(max) {
  const balls: BingoBall[] = [];

  for (let idx: number = 1; idx <= max; idx++) {
    if (idx <= max / 5) {
      balls.push({ column: "B", value: idx });
    } else if (idx <= (max / 5) * 2) {
      balls.push({ column: "I", value: idx });
    } else if (idx <= (max / 5) * 3) {
      balls.push({ column: "N", value: idx });
    } else if (idx <= (max / 5) * 4) {
      balls.push({ column: "G", value: idx });
    } else {
      balls.push({ column: "O", value: idx });
    }
  }

  for (let i = balls.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [balls[i], balls[j]] = [balls[j], balls[i]]; // Swap elements
  }
  return balls;
}
export default function BingoCallerPage() {
  const balls = generateBingoBalls(75);
  const [display, setDisplay] = useState(false);
  const [callIdx, setCallIdx] = useState(0);

  const [board, setBoard] = useState({
    B: createRows(1, 15),
    I: createRows(16, 30),
    N: createRows(31, 45),
    G: createRows(46, 60),
    O: createRows(61, 75),
  });

  const nextBall = () => {
    const nextId = callIdx + 1;
    setCallIdx(nextId);
    // updateBoard(nextId);
  };
  useEffect(() => {
    setDisplay(true);
  }, [setDisplay, display]);
  if (!display) {
    return null;
  }
  return (
    <styled.main w="full">
      <styled.section>
        {JSON.stringify(callIdx)}
        <Container maxW="1264px">
          <styled.div>
            <styled.h1 fontSize="4xl">Bingo</styled.h1>
            <styled.h3>
              current ball: {balls[callIdx].column}-{balls[callIdx].value}
            </styled.h3>
            <styled.button
              py="1"
              px="4"
              borderWidth="2px"
              borderColor="slate.500"
              borderRadius="full"
              onClick={nextBall}
            >
              next ball
            </styled.button>
          </styled.div>
        </Container>
      </styled.section>
      <styled.section>
        <Container maxW="1264px">
          <MasterBoard ball={balls[callIdx]} />
        </Container>
      </styled.section>
    </styled.main>
  );
}
