const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m, h] = inputs.shift().split(" ").map(Number);

const board = Array.from(Array(h), () => Array.from(Array(m), () => []));

const solution = () => {
  let zeroCount = 0;
  const q = [];

  let height = 0;
  while (inputs.length) {
    for (let i = 0; i < m; i++) {
      board[height][i] = inputs.shift().split(" ").map(Number);
    }
    height++;
  }
  // console.log(board);

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < m; j++) {
      for (let k = 0; k < n; k++) {
        if (board[i][j][k] === 1) {
          board[i][j][k] = Infinity;
          q.push([i, j, k]);
        }

        if (board[i][j][k] === 0) zeroCount++;
      }
    }
  }

  if (zeroCount === 0) return 0;

  const bfs = () => {
    let time = 0;
    let zero = 0;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    while (q.length) {
      let len = q.length;
      for (let i = 0; i < len; i++) {
        const [x, y, z] = q.shift();

        for (let j = 0; j < 4; j++) {
          // 동서남북
          const nx = dx[j] + y;
          const ny = dy[j] + z;

          if (
            nx >= 0 &&
            nx < m &&
            ny >= 0 &&
            ny < n &&
            board[x][nx][ny] === 0
          ) {
            board[x][nx][ny] = Infinity;
            q.push([x, nx, ny]);
            zero++;
          }
        }

        if (x - 1 >= 0) {
          if (board[x - 1][y][z] === 0) {
            board[x - 1][y][z] = Infinity;
            q.push([x - 1, y, z]);
            zero++;
          }
        }
        if (x + 1 < h) {
          if (board[x + 1][y][z] === 0) {
            board[x + 1][y][z] = Infinity;
            q.push([x + 1, y, z]);
            zero++;
          }
        }
      }
      time++;
    }

    if (zero !== zeroCount) {
      return -1;
    } else {
      return time - 1;
    }
  };

  return bfs();
};

console.log(solution());
