import { adventOfCodeData02 } from "../input/data-two";

function isReportSafe(input: number[]): boolean {
  let lastValue: number | undefined;
  let isIncreasing = false;
  let isDecreasing = false;
  let isOverGapped = false;
  let isEqual = false;

  // Check if the report is safe without any modifications
  const isSafeWithoutDampener = (report: number[]): boolean => {
    lastValue = undefined;
    isIncreasing = false;
    isDecreasing = false;
    isOverGapped = false;
    isEqual = false;

    report.forEach((value) => {
      if (lastValue === undefined) {
        lastValue = value;
        return;
      }

      const gap = value - lastValue;

      isOverGapped ||= gap > 3 || gap < -3;
      isIncreasing ||= gap > 0;
      isDecreasing ||= gap < 0;
      isEqual ||= gap === 0;

      lastValue = value;
    });

    return (
      !isEqual &&
      !isOverGapped &&
      (isIncreasing || isDecreasing) &&
      !(isIncreasing && isDecreasing)
    );
  };

  // If the report is already safe, return true
  if (isSafeWithoutDampener(input)) {
    return true;
  }

  let isSafe = false;
  // Check if removing a single level makes the report safe
  for (let i = 0; i < input.length; i++) {
    const modifiedReport = input.slice(0, i).concat(input.slice(i + 1));
    if (isSafeWithoutDampener(modifiedReport)) {
      isSafe = true;
      break;
    }
  }

  return isSafe;
}

function countSafeReports(reportList: number[][]): number {
  let safeReports = 0;
  reportList.forEach((report) => {
    if (isReportSafe(report)) {
      safeReports++;
    }
  });
  return safeReports;
}

function firstPart(): void {
  const rawRows = adventOfCodeData02.split("\n");
  const reportList = rawRows.map((row) => 
  row.split(" ").map((value) => parseInt(value, 10)));

  const totalSafeReports = countSafeReports(reportList);

  console.log("Total safe reports: ", totalSafeReports);
}


export { countSafeReports, firstPart, isReportSafe };