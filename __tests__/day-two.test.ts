import { countSafeReports, firstPart, isReportSafe } from "../advent-of-code/code/day-two";

describe("calculateSaveReports", () => {

  // Part 1 ___________________________________________________________
  describe("isReportSafe", () => {
    it("returns true for a safe decreasing report", () => {
      expect(isReportSafe([7, 6, 4, 2, 1])).toBe(true);
    });
  
    it("returns false for a report with a large jump", () => {
      expect(isReportSafe([1, 2, 7, 8, 9])).toBe(false);
    });
  
    it("returns false for a report with a large jump", () => {
      expect(isReportSafe([9, 7, 6, 2, 1])).toBe(false);
    });
  
    it("returns false for a report with mixed direction", () => {
      expect(isReportSafe([1, 3, 2, 4, 5])).toBe(true);
    });
  
    it("returns false for equal adjacent values", () => {
      expect(isReportSafe([8, 6, 4, 4, 1])).toBe(true);
    });
  
    it("returns true for a safe increasing report", () => {
      expect(isReportSafe([1, 3, 6, 7, 9])).toBe(true);
    });
  });

  it("should calculate the total of reports that are safe", () => {
    const reportList = [
        [7, 6, 4, 2, 1],
        [1, 2, 7, 8, 9],
        [9, 7, 6, 2, 1],
        [1, 3, 2, 4, 5],
        [8, 6, 4, 4, 1],
        [1, 3, 6, 7, 9]
    ];

    expect(countSafeReports(reportList)).toBe(4);
  });

  it("should show first part console result", () => {
    firstPart();
  });
});
