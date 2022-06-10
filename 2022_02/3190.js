const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

// 입력값 처리
const n = Number(inputs.shift());
const k = Number(inputs.shift());

let board = Array.from(Array(n + 2), () => Array(n + 2).fill(0));
// board 벽 처리
for (let i = 0; i <= n; i++) {
  board[0][i] = 1;
  board[i][0] = 1;
  board[n + 1][i] = 1;
  board[i][n + 1] = 1;
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

let flag = 0;
while (snake.length) {
  // 뱀 머리
  let [snake_x, snake_y] = snake[0];
  second++;
  // 현재 위치를 변경해야하는 경우
  if (dir.has(second - 1)) {
    let change_dir = dir.get(second - 1);

    if (change_dir === "D") {
      current_dir = (current_dir + 1) % 4;
    } else {
      current_dir = (current_dir + 3) % 4;
    }
  }

  // 현재 board 위의 snake 머리 위치
  let current_snake =
    board[snake_x + dx[current_dir]][snake_y + dy[current_dir]];

  /* 조건문
  1. 벽을 만나는 경우
  2. 사과가 있는 경우 - 뱀의 길이만 늘어난다 
  3. 사과가 없는 경우 */
  if (current_snake === 1) break;
  else {
    let move_head_x = snake_x + dx[current_dir];
    let move_head_y = snake_y + dy[current_dir];

    snake.unshift([move_head_x, move_head_y]);
    if (current_snake === 2) {
      // 사과를 없애줌
      board[move_head_x][move_head_y] = 0;
    }
    if (current_snake !== 2) {
      for (let i = snake.length - 1; i >= 1; i--) {
        let [tmpx, tmpy] = snake[i];
        if (tmpx === move_head_x && tmpy === move_head_y) {
          flag = 1;
          break;
        }
      }
      snake.pop();
    }
  }
  if (flag) break;
}
console.log(second);
