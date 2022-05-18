const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const board = Array.from(Array(n), () => []);

for (let i = 0; i < board.length; i++) {
  board[i] = inputs[i + 1].split(" ").map(Number);
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let cur = [];
let fish = [];
let size = 1;
let eat = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 9) cur = [i, j];
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] >= 1 && board[i][j] <= 6) {
      const location = parseInt(
        Math.sqrt((cur[0] - i) ** 2 + (cur[1] - j) ** 2)
      );
      fish.push([i, j, location, board[i][j]]);
    }
  }
}

fish.sort((a, b) =>
  a[3] === b[3] ? (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]) : a[3] - b[3]
);

while (fish.length) {
  const [x, y, ,] = fish.shift();
  const q = [cur];
  const visited = Array(Array(n), () => Array(n).fill(false));
}
