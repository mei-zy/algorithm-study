const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [r, c] = inputs[0].split(" ").map(Number);
const board = Array.from(Array(r), () => []);

for (let i = 0; i < r; i++) {
  board[i] = inputs[i + 1].split(" ").map(Number);
}

const set = new Set();
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let answer = 0;

const dfs = (x, y, set, level) => {
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      nx < r &&
      ny >= 0 &&
      ny < c &&
      board[nx][ny] !== "#" &&
      !set.has(board[nx][ny])
    ) {
      board[nx][ny] = "#";
      set.add(board[nx][ny]);
      dfs(nx, ny, set, level + 1);
      set.delete(board[nx][ny]);
    }
  }
};

set.add(board[0][0]);
board[0][0] = "#";
dfs(0, 0, set, 1);

console.log(answer);
