import { useEffect, useState } from "react";
import { styled, Grid, GridItem } from "styled-system/jsx";
import BingoSpace from "./BingoSpace";

function createRows(n: number, m: number) {
  const row: BoardColumn = { numbers: [] };
  for (n; n <= m; n++) {
    row.numbers.push({ value: n, marked: false });
  }
  return row;
}

export default function MasterBoard({ ball }: { ball: BingoBall }) {
  const indexes = Array.from(Array(15).keys());
  const [board, setBoard] = useState({
    B: createRows(1, 15),
    I: createRows(16, 30),
    N: createRows(31, 45),
    G: createRows(46, 60),
    O: createRows(61, 75),
  });

  useEffect(() => {
    console.log({ ball });

    setBoard((prevBoard) => {
      const updatedBoard = { ...prevBoard }; // Shallow copy of the board
      const column = updatedBoard[ball.column];
      const idx = (Number(ball.value) - 1) % 15;

      // Create a new array for the numbers to avoid mutating state
      updatedBoard[ball.column] = {
        ...column,
        numbers: column.numbers.map(
          (num, i) => (i === idx ? { ...num, marked: true } : num) // Update the specific number
        ),
      };

      console.log({ updatedBoard });
      return updatedBoard; // Return the updated board object
    });
  }, [ball]);

  return (
    <styled.div>
      {/* {JSON.stringify(ball.value)} */}
      <Grid w="full" columns={5} justifyItems="center">
        <GridItem colSpan={1}>
          <styled.h2>B</styled.h2>
        </GridItem>
        <GridItem colSpan={1}>
          <styled.h2>I</styled.h2>
        </GridItem>
        <GridItem colSpan={1}>
          <styled.h2>N</styled.h2>
        </GridItem>
        <GridItem colSpan={1}>
          <styled.h2>G</styled.h2>
        </GridItem>
        <GridItem colSpan={1}>
          <styled.h2>O</styled.h2>
        </GridItem>
        {!!board &&
          indexes.map((idx) =>
            Object.keys(board).map((key) => (
              <GridItem
                key={`${key}-${board[key].numbers[idx].value}-${board[key].numbers[idx].marked}`}
                w="full"
                bg={board[key].numbers[idx].marked ? "red.200" : "transparent"}
              >
                <BingoSpace
                  value={board[key].numbers[idx].value}
                  marked={board[key].numbers[idx].marked}
                />
              </GridItem>
            ))
          )}
      </Grid>
    </styled.div>
  );
}
