const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m, k] = inputs[0].split(" ").map(Number);
const board = Array.from(Array(n), () => Array(m).fill(0));

for (let i = 0; i < k; i++) {
  const [x, y] = inputs[i + 1].split(" ").map(Number);
  board[x - 1][y - 1] = 1;
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const BFS = (x, y) => {
  const queue = [[x, y]];
  board[x][y] = 0;
  let sum = 1;

  while (queue.length) {
    const [tmpx, tmpy] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + tmpx;
      const ny = dy[i] + tmpy;

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && board[nx][ny]) {
        sum++;
        board[nx][ny] = 0;
        queue.push([nx, ny]);
      }
    }
  }

  return sum;
};

let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j]) {
      answer = Math.max(answer, BFS(i, j));
    }
  }
}

console.log(answer);
