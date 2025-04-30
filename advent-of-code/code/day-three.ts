import { match } from "assert";
import { read, readFileSync } from "fs";
import { join } from "path";

function mul(x: number, y: number): number {
  return x * y;
}

function removeDontToDo(input: string): string {
  // Regex to match everything from "don't" to "do()"
  const regex = /don't.*?do\(\)/g;
  return input.replace(regex, "");
}

function getRealMulInstructions(input: string, doFlag?: boolean): string[] {
  const formatedInput = doFlag ? removeDontToDo(input) : input;

  const regex = /mul\(\d{1,3},\d{1,3}\)/g;
  const matches = formatedInput.match(regex);

  return (matches || []);
}

function getMulInstructionValue(instruction: string): number {
  const match = instruction.match(/\d+/g);
  if (!match) throw new Error(`Invalid instruction: ${instruction}`);
  const [x, y] = match.map(Number);
  return mul(x, y);
}

function readFileContent(): string {
  // Read the file content as a string
  const filePath = join(__dirname, "../input/data-three.txt");
  const fileContent = readFileSync(filePath, "utf-8");

  // Remove line breaks
  return fileContent.replace(/[\r\n]+/g, "");
}


function firstPart(): void {
  const fileContent = readFileContent();

  // Process the file content
  const instructions = getRealMulInstructions(fileContent);
  
  const totalValue = instructions.reduce((acc, instruction) => {
    return acc + getMulInstructionValue(instruction);
  }, 0);

  console.log("Total computer value:", totalValue);
}

function secondPart(): void {
  const fileContent = readFileContent();

  // Process the file content
  const instructions = getRealMulInstructions(fileContent, true);
  
  const totalValue = instructions.reduce((acc, instruction) => {
    return acc + getMulInstructionValue(instruction);
  }, 0);

  console.log("Total computer on DO instruction value:", totalValue);
}

export { mul, getRealMulInstructions, getMulInstructionValue, firstPart, secondPart };