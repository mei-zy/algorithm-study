const { log } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testcase = Number(input.shift());
let index = 0;
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

// 테스트 케이스만큼 실행
for (let i = 0; i < testcase; i++) {
  let answer = 0;
  let [m, n, k] = input[index].split(" ").map(Number);
  // M,N,K 입력 받기
  let board = Array.from(Array(m), () => Array(n).fill(0));
  let visited = Array.from(Array(m), () => Array(n).fill(false));
  for (let j = 1; j <= k; j++) {
    let [x, y] = input[index + j].split(" ").map(Number);
    board[x][y] = 1;
  }

  for (let t = 0; t < m; t++) {
    for (let z = 0; z < n; z++) {
      if (board[t][z] === 1 && visited[t][z] === false) {
        BFS(board, visited, t, z, m, n);
        answer++;
      }
    }
  }
  console.log(answer);
  // board에 값 입력 받기
  index = index + k + 1;
}

function BFS(board,visited, x, y, m, n) {
  let queue = [];
  queue.push([x, y]);
  visited[x][y] = true;
  while (queue.length) {
    let x = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x[0] + dx[i];
      let ny = x[1] + dy[i];
      if (
        nx >= 0 &&
        nx < m &&
        ny >= 0 &&
        ny < n &&
        !visited[nx][ny] &&
        board[nx][ny] === 1
      ) {
        // 범위 맞고, 배추가 있는 곳이라면
        visited[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
}
