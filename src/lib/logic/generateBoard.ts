import generateRandomizedList from "./generateRandomNumberArray";

function generateBalls() {
  const gameBoard = Array.from(Array(76).keys());
  return {
    b: gameBoard.filter((n) => n <= 15).map((n) => { value: n, called:}),
    i: gameBoard.filter((n) => n > 15 && n <= 30),
    n: gameBoard.filter((n) => n > 30 && n <= 45),
    g: gameBoard.filter((n) => n > 45 && n <= 60),
    o: gameBoard.filter((n) => n > 60),
  };
}
export default function generateBoard(): Game {
  return {
    currentCall: 0,
    callList: generateRandomizedList(1, 75),
    balls: generateBalls(),
  } as Game;
}
