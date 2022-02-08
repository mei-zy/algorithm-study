const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

// 입력값 처리
const n = Number(inputs.shift());
const k = Number(inputs.shift());

let board = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
// board 벽 처리
for (let i = 0; i <= n; i++) {
  board[0][i] = 1;
  board[i][0] = 1;
  board[n][i] = 1;
  board[i][n] = 1;
}

// 사과가 있는 자리 : 2
for (let i = 0; i < k; i++) {
  let [apple_x, apple_y] = inputs.shift().split(" ").map(Number);
  board[apple_x][apple_y] = 2;
}

const l = Number(inputs.shift());
const dir = new Map();
for (let i = 0; i < l; i++) {
  let [second, direction] = inputs[i].split(" ");
  dir.set(Number(second), direction);
}

// 풀이 시작
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let current_dir = 1;
let snake = [];
let second = 0;

snake.push([1, 1]);

while (snake.length) {
  let [snakehead_x, snakehead_y] = snake[0];

  // 벽이 있는 경우
  if (board[snakehead_x][snakehead_y] === 1) {
    break;
  }
  // 사과가 있는 경우
  else if (board[snakehead_x][snakehead_y] === 2) {
    snake.unshift([
      snakehead_x + dx[current_dir],
      snakehead_y + dy[current_dir],
    ]);
  } else {
    // 아무것도 없는 경우
    snake.unshift([
      snakehead_x + dx[current_dir],
      snakehead_y + dy[current_dir],
    ]);

    snake.pop();
  }
  // direction 변경
  // second +1 초후 변경해줌
  if (dir.has(second)) {
    let direction = dir.get(second);

    if (direction === "L") current_dir = (current_dir + 3) % 4;
    else current_dir = (current_dir + 1) % 4;
  }
  second++;
  // direction 변경해주기
}
console.log(second);
