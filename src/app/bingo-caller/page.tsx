import BingoCallerPage from "./BingoCallerPage";
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
export default function Page() {
  const balls = generateBingoBalls(75);

  return <BingoCallerPage balls={balls} />;
}
