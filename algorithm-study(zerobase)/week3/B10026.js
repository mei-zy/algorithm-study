const { log } = require("console");

let input = require("fs").readFileSync("./input.txt").toString().split("\n");
let n = Number(input[0]);
let arr = new Array(n);
let cnt_able = (cnt_disable = 0);
for (let i = 0; i < arr.length; i++) {
  arr[i] = input[i + 1].split("");
}
let check = new Array(n);
for (let i = 0; i < check.length; i++) {
  check[i] = new Array(n).fill(0);
}

// arr : 담겨있는 배열

// <--------- 풀이 시작 ---------->
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
function BFS(x, y) {
  let queue = [];
  queue.push([x, y]);
  check[x][y] = 1;
  while (queue.length) {
    let current = queue.shift();
    for (let i = 0; i < n; i++) {
      let nx = current[0] + dx[i];
      let ny = current[1] + dy[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && check[nx][ny] === 0) {
        if (arr[current[0]][current[1]] === arr[nx][ny]) {
          check[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
  }
}

let count_grb=0;
for(let i=0;i<n;i++){
  for(let j=0;j<n;j++){
    if(!check[i][j]){
      BFS(i,j);
      count_grb++;
    }
  }
}
// 방문 안한 사람

// 적록 색약인 사람의 배열 다시 정렬

for(let i=0;i<n;i++){
  for(let j=0;j<n;j++){
    if(arr[i][j]==="G") arr[i][j]="R";
    check[i][j]=0;
    // 배열 변경시켜주면서 체크 배열 초기화
  }
}

let count_gr=0;
for(let i=0;i<n;i++){
  for(let j=0;j<n;j++){
    if(!check[i][j]){
      BFS(i,j);
      count_gr++;
    }
  }
}

console.log(count_grb, count_gr);