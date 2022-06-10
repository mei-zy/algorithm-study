const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = inputs[0].split(" ").map(Number);
const board = [];

for (let i = 0; i < n; i++) {
  board[i] = inputs[i + 1].split(" ").map(Number);
}

function BFS(x, y) {
  let tmp_board = [];
  let dir = 2;
  for (let i = 0; i < n; i++) {
    tmp_board[i] = [...board[i]];
  }

  let cnt = 0;
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] >= 2 && board[i][j] <= 6) {
      BFS(i, j);
    }
  }
}
