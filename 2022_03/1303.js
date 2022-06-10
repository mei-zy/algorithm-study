const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = inputs[0].split(" ").map(Number);
let board = [];

for (let i = 0; i < n; i++) {
  board[i] = inputs[i + 1].split("");
}

const lx = [-1, 0, 1, 0];
const ly = [0, 1, 0, -1];

let white_count = 0;
let white_visited = Array.from(Array(n), () => Array(m).fill(false));

let black_count = 0;
let black_visited = Array.from(Array(n), () => Array(m).fill(false));

const BFS = (x, y, type) => {
  let queue = [];
  let count = 1;

  queue.push([x, y]);

  if (type === "B") black_visited[x][y] = true;
  else white_visited[x][y] = true;

  while (queue.length) {
    let [tx, ty] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const dx = tx + lx[i];
      const dy = ty + ly[i];

      if (dx >= 0 && dx < n && dy >= 0 && dy < m) {
        if (board[dx][dy] !== type) continue;

        if (type === "B") {
          if (black_visited[dx][dy]) continue;

          black_visited[dx][dy] = true;
        } else {
          if (white_visited[dx][dy]) continue;
          white_visited[dx][dy] = true;
        }

        queue.push([dx, dy]);
        count++;
      }
    }
  }
  return count;
};

for (let i = 0; i < n; i++) {
  for (let k = 0; k < m; k++) {
    if (board[i][k] === "W" && !white_visited[i][k]) {
      const white = BFS(i, k, "W");
      white_count += white * white;
    }
    if (board[i][k] === "B" && !black_visited[i][k]) {
      const black = BFS(i, k, "B");
      black_count += black * black;
    }
  }
}

console.log(`${white_count} ${black_count}`);
