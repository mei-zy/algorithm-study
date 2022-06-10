const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const board = Array.from(Array(n), () => []);

for (let i = 0; i < n; i++) {
  board[i] = inputs[i + 1].split("").map(Number);
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const bfs = (x, y) => {
  let count = 1;
  const q = [[x, y]];
  board[x][y] = 0;

  while (q.length) {
    const [nx, ny] = q.shift();

    for (let i = 0; i < n; i++) {
      const tmpx = nx + dx[i];
      const tmpy = ny + dy[i];

      if (
        tmpx >= 0 &&
        tmpx < n &&
        tmpy >= 0 &&
        tmpy < n &&
        board[tmpx][tmpy] === 1
      ) {
        q.push([tmpx, tmpy]);
        board[tmpx][tmpy] = 0;
        count++;
      }
    }
  }
  return count;
};

const answer = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1) {
      const result = bfs(i, j);
      answer.push(result);
    }
  }
}

answer.sort((a, b) => a - b);
console.log(answer.length);
for (let i = 0; i < answer.length; i++) {
  console.log(answer[i]);
}
