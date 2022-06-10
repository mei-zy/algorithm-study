const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const board = [];

for (let i = 0; i < n; i++) {
  board[i] = inputs[1 + i].split(" ");
}

const permutation = [];
// 순열 배열 만들기
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === "X") permutation.push([i, j]);
  }
}

const getCombinations = (arr, selectNum) => {
  const result = [];

  if (selectNum === 1) return arr.map((element) => [element]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((element) => [fixed, ...element]);

    result.push(...attached);
  });

  return result;
};

const result = getCombinations(permutation, 3);

const bfs = (x, y) => {};

for (let i = 0; i < result.length; i++) {
  const tmpBoard = [...board];
  const [x1, x2] = result[i][0];
  const [y1, y2] = result[i][1];
  const [z1, z2] = result[i][2];

  tmpBoard[x1][x2] = "O";
  tmpBoard[y1][y2] = "O";
  tmpBoard[z1][z2] = "O";

  FO;
}
