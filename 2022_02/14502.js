const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

// 입력받는 부분
const [n, m] = inputs[0].split(" ").map(Number);

const board = Array(n);
let answer = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
  board[i] = inputs[i + 1].split(" ").map(Number);
}

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

function calSafeZone(tmp_board) {
  // console.log(tmp_board);
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (tmp_board[i][j] === 0) count++;
    }
  }
  // console.log(count);
  return count;
}

function BFS() {
  let tmpanswer;
  let queue = [];
  let tmp_board = Array.from(Array(n), () => Array(m));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      tmp_board[i][j] = board[i][j];
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (tmp_board[i][j] === 2) queue.push([i, j]);
    }
  }

  while (queue.length) {
    let [tmpx, tmpy] = queue.shift();
    // console.log(tmpx, tmpy);

    for (let i = 0; i < 4; i++) {
      let tmpdx = tmpx + dx[i];
      let tmpdy = tmpy + dy[i];

      if (
        tmpdx >= 0 &&
        tmpdx < n &&
        tmpdy >= 0 &&
        tmpdy < m &&
        tmp_board[tmpdx][tmpdy] === 0
      ) {
        tmp_board[tmpdx][tmpdy] = 2;

        queue.push([tmpdx, tmpdy]);
      }
    }
  }
  tmpanswer = calSafeZone(tmp_board);
  answer = Math.max(tmpanswer, answer);
}

// 0의 list 담아주기
let zero_list = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (board[i][j] === 0) zero_list.push([i, j]);
  }
}

for (let i = 0; i < zero_list.length; i++) {
  for (let j = i + 1; j < zero_list.length; j++) {
    for (let k = j + 1; k < zero_list.length; k++) {
      // console.log("i: ", zero_list[i][0], zero_list[i][1]);

      board[zero_list[i][0]][zero_list[i][1]] = 1;
      board[zero_list[j][0]][zero_list[j][1]] = 1;
      board[zero_list[k][0]][zero_list[k][1]] = 1;
      BFS();
      board[zero_list[i][0]][zero_list[i][1]] = 0;
      board[zero_list[j][0]][zero_list[j][1]] = 0;
      board[zero_list[k][0]][zero_list[k][1]] = 0;
    }
  }
}
console.log(answer);
