const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = inputs[0].split(" ").map(Number);
const board = Array.from(Array(m), () => []);

for (let i = 0; i < m; i++) {
  board[i] = inputs[1 + i].split(" ").map(Number);
}

// 풀이 시작
const solution = () => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const q = [];
  let answer = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) q.push([i, j]);
    }
  }

  if (!q.length) return 0;

  while (q.length) {
    const len = q.length;

    for (let i = 0; i < len; i++) {
      const [x, y] = q.shift();

      for (let j = 0; j < 4; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (nx >= 0 && nx < m && ny >= 0 && ny < n && board[nx][ny] === 0) {
          board[nx][ny] = 1;
          q.push([nx, ny]);
        }
      }
    }
    answer++;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 0) return -1;
    }
  }

  return answer - 1;
};

const result = solution();
console.log(result);
