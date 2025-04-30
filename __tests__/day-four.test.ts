import { countingXmas } from "../advent-of-code/code/day-four";

describe("ceresSearch", () => {
    /*
        As the search for the Chief continues, a small Elf who lives on the station tugs on your shirt;
        she'd like to know if you could help her with her word search (your puzzle input). 
        She only has to find one word: XMAS.

        This word search allows words to be horizontal, vertical, diagonal, written backwards, 
        or even overlapping other words. It's a little unusual, though, as you don't merely need to 
        find one instance of XMAS - you need to find all of them. Here are a few ways XMAS might appear, 
        where irrelevant characters have been replaced with.

        In this word search, XMAS occurs a total of 18 times; here's the same word search again, 
        but where letters not involved in any XMAS have been replaced with.
    */
    const exampleInput = `
        ....XXMAS.
        .SAMXMS...
        ...S..A...
        ..A.A.MS.X
        XMASAMX.MM
        X.....XA.A
        S.S.S.S.SS
        .A.A.A.A.A
        ..M.M.M.MM
        .X.X.XMASX`;

    it("should return 18 for example input", () => {
        const result = countingXmas(exampleInput);
        expect(result).toBe(18);
    });
    
    it("should return 0 if word is not present", () => {
    const zeroInput = `
        "ABCDEFGH",
        "IJKLMNOP",
        "QRSTUVWX",
        "YZABCDEF",
    `;
    expect(countingXmas(zeroInput)).toBe(0);
    });
    
    it("should detect reversed XMAS", () => {
    const reversedXMASInput = `
        "S",
        "A",
        "M",
        "X",
    `;
    expect(countingXmas(reversedXMASInput)).toBe(1);
    });

});