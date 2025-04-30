
function countingXmas(input: string): number {
    const grid = input.trim().split("\n").map(line => line.trim());
    const word = "XMAS";
    const directions = [
        [0, 1], // right
        [1, 0], // down
        [1, 1], // diagonal down-right
        [0, -1], // left
        [-1, 0], // up
        [-1, -1], // diagonal up-left
        [-1, 1], // diagonal up-right
        [1, -1] // diagonal down-left
    ];
    let count = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            // Const for direction row and column
            for (const [dr, dc] of directions) {
                let found = true;
                // Checking word in the current direction
                for (let i = 0; i < word.length; i++) {
                    const nr = r + dr * i;
                    const nc = c + dc * i;
                    const isOutOfBounds = nr < 0 || nr >= grid.length || nc < 0 || nc >= grid[r].length;
                    const isWrong = isOutOfBounds || grid[nr][nc] !== word[i];
                    if (isWrong) {
                        found = false;
                        break;
                    }
                }

                if (found) count++;
            }
        }
    }

    return count;
}

export { countingXmas };