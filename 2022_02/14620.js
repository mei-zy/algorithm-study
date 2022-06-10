const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const map = [];

for (let i = 0; i < n; i++) {
  map[i] = inputs[i + 1].split(" ").map(Number);
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const visited = Array.from(Array(n), () => Array(n).fill(false));
let answer = Number.MAX_SAFE_INTEGER;

const check = (x, y) => {
  if (visited[x][y]) return false;

  for (let i = 0; i < 4; i++) {
    const tmpx = x + dx[i];
    const tmpy = y + dy[i];
    if (visited[tmpx][tmpy]) return false;
  }

  return true;
};

const checkVisited = (x, y) => {
  let sum = map[x][y];
  visited[x][y] = !visited[x][y];

  for (let i = 0; i < 4; i++) {
    const tmpx = x + dx[i];
    const tmpy = y + dy[i];

    sum += map[tmpx][tmpy];
    visited[tmpx][tmpy] = !visited[tmpx][tmpy];
  }

  return sum;
};
const DFS = (x, y, L, sum) => {
  if (L === 3) {
    answer = Math.min(answer, sum);
    return;
  } else {
    for (let i = x; i < n - 1; i++) {
      for (let j = y; j < n - 1; j++) {
        if (!check(i, j)) continue;

        const tmpsum = checkVisited(i, j);
        DFS(i, j + 1, L + 1, sum + tmpsum);
        checkVisited(i, j);
      }
    }
  }
};

DFS(1, 1, 0, 0);
console.log(answer);
