let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let tc = Number(input[0]);
// tc= testcase
let index = 1;

// <------풀이 시작------>
// console.log(tc);
let dx = [-2, -1, 1, 2, 2, 1, -1, -2];
let dy = [1, 2, 2, 1, -1, -2, -2, -1];


let answer;
for (let i = 0; i < tc; i++) {
  let board_size = Number(input[index]);
  let board = new Array(board_size);
  let distance = new Array(board_size);
  for (let i = 0; i < board_size; i++) {
    board[i] = new Array(board_size).fill(0);
    distance[i] = new Array(board_size).fill(0);
  }
  // 이차원 배열 생성
  let start_x = Number(input[index + 1].split(" ")[0]);
  let start_y = Number(input[index + 1].split(" ")[1]);
  let end_x = Number(input[index + 2].split(" ")[0]);
  let end_y = Number(input[index + 2].split(" ")[1]);
  function BFS(x, y) {
    let queue = [];
    queue.push([x, y]);
    board[x][y] = 1;
    distance[x][y] = 0;
  
    while (queue.length) {
      let current = queue.shift();
  
      for (let i = 0; i < 8; i++) {
        let nx = current[0] + dx[i];
        let ny = current[1] + dy[i];
        if (
          nx >= 0 &&
          nx < board_size &&
          ny >= 0 &&
          ny < board_size &&
          board[nx][ny] === 0
        ) {
          queue.push([nx, ny]);
          board[nx][ny] = 1;
          distance[nx][ny] = (distance[current[0]][current[1]] + 1);
        }
      }
    }
  }
  BFS(start_x,start_y);
  answer=distance[end_x][end_y];
  console.log(answer);
  index += 3;
}
