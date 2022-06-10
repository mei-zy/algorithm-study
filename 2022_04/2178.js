const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = inputs[0].split(" ").map(Number);
const board = Array(n);
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
for (let i = 0; i < n; i++) board[i] = inputs[i + 1].split("").map(Number);

const bfs = (x, y) => {
  const q = [[x, y]];
  let count = 1;

  board[x][y] = 0;

  while (q.length) {
    const len = q.length;

    for (let j = 0; j < len; j++) {
      const [tmpx, tmpy] = q.shift();

      if (tmpx === n - 1 && tmpy === m - 1) return count;
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [tmpx + dx[i], tmpy + dy[i]];
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && board[nx][ny] === 1) {
          q.push([nx, ny]);
          board[nx][ny] = 0;
        }
      }
    }
    count++;
  }
  return -1;
};

const result = bfs(0, 0);
console.log(result);
