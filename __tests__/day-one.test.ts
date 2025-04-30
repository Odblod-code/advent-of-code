import { calculateSimilarity, calculateTotalDistance, firstPart, secondPart } from "../advent-of-code/code/day-one";

describe("calculateTotalDistance", () => {
  // Part 1 ___________________________________________________________
  it("should calculate the total distance between two lists", () => {
    const leftList = [3, 4, 2, 1, 3, 3];
    const rightList = [4, 3, 5, 3, 9, 3];

    expect(calculateTotalDistance(leftList, rightList)).toBe(11);
  });

  it("should return 0 if both lists are identical", () => {
    const leftList = [1, 2, 3, 4, 5];
    const rightList = [1, 2, 3, 4, 5];

    expect(calculateTotalDistance(leftList, rightList)).toBe(0);
  });

  it("should throw an error if lists have different lengths", () => {
    const leftList = [1, 2, 3];
    const rightList = [1, 2];

    expect(() => calculateTotalDistance(leftList, rightList)).toThrow(
      "Lists must have the same length"
    );
  });

  it("should show first part console result", () => {
    firstPart();
  });

  // Part 2 ___________________________________________________________
  it("should calculate the similarity between two lists", () => { 
    const leftList = [3, 4, 2, 1, 3, 3];
    const rightList = [4, 3, 5, 3, 9, 3];

    expect(calculateSimilarity(leftList, rightList)).toBe(31);
  });

  it("should show second part console result", () => {
    secondPart();
  });
});
