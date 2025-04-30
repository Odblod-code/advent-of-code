import { adventOfCodeData01 } from "../input/data-one";

function calculateTotalDistance(leftList: number[], rightList: number[]): number {
  if (leftList.length !== rightList.length) {
    throw new Error("Lists must have the same length");
  }

  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  return leftList.reduce((total, leftValue, index) => {
    return total + Math.abs(leftValue - rightList[index]);
  }, 0);
}

function firstPart(): void {
  const leftList: number[] = [];
  const rightList: number[] = [];

  const rawRows = adventOfCodeData01.trim().split("\n");
  rawRows.forEach((row) => {
      const formattedRow = row.replace(/\s+/g, " ").trim().split(" ");
      const rowNumbers = formattedRow.map((number) => 
          parseInt(number, 10)
      );
      leftList.push(rowNumbers[0]);
      rightList.push(rowNumbers[1]);
  });

  const totalDistance = calculateTotalDistance(leftList, rightList);
  console.log("Total distance:", totalDistance);
}

function calculateSimilarity(leftList: number[], rightList: number[]): number {
  const similarity = leftList.map(
    // For each leftValue, filter the rightList to find matching values
    (leftValue) => rightList.filter(
      (rightValue) => leftValue === rightValue
    // Count the number of matches and multiply by the leftValue
    ).length * leftValue
  );

  const totalSimilarity = similarity.reduce((total, value) => total + value, 0);

  return totalSimilarity;
};

function secondPart(): void {
  const leftList: number[] = [];
  const rightList: number[] = [];

  const rawRows = adventOfCodeData01.trim().split("\n");
  rawRows.forEach((row) => {
      const formattedRow = row.replace(/\s+/g, " ").trim().split(" ");
      const rowNumbers = formattedRow.map((number) => 
          parseInt(number, 10)
      );
      leftList.push(rowNumbers[0]);
      rightList.push(rowNumbers[1]);
  });

  const totalDistance = calculateSimilarity(leftList, rightList);
  console.log("Total similarity:", totalDistance);
}

export { calculateTotalDistance, firstPart, calculateSimilarity, secondPart };