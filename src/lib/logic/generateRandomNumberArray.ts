export default function generateRandomNumberArray(
  min: number,
  max: number
): number[] {
  if (min > max) {
    throw new Error("The 'min' value cannot be greater than 'max'.");
  }

  const numbers: number[] = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  // Shuffle the array
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // Swap elements
  }

  return numbers;
}
