let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./input.txt").toString().split("\n");
let splited = input[0].split(" ");

let N = Number(splited[0]);
let M = Number(splited[1]);

let board = Array.from(Array(N + 1), () => Array(M + 1));
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) board[i][j] = Number(input[i][j - 1]);
}
// board 완성하기
// console.log(board);
const visited = new Array(N+1)
  .fill(0)
  .map(() => new Array(M+1).fill(0).map(() => new Array(2).fill(false)));


let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

// bfs 시작
let queue = [];
queue.push([1,1,0,1]);
visited[1][1][0] = true;
// 1,1 은 방문한 지점이다.

function BFS() {
  while (queue.length) {
    let x = queue.shift();

    if(x[0]===N && x[1]===M){
        console.log(x[3]);
        return;
    }
    for(let i=0;i<4;i++){
        let nx=x[0]+dx[i];
        let ny=x[1]+dy[i];
        let isBreak=x[2];
        let cnt=x[3];
        if(nx>0 && nx<=N && ny>0 && ny<=M && isBreak<=1){
            if(board[nx][ny]===1){
                // 벽을 만난 경우
                if(isBreak===0){
                    if(!visited[nx][ny][isBreak+1]){
                        queue.push([nx,ny,isBreak+1,cnt+1]);
                        visited[nx][ny][isBreak+1]=true;
                    }
                }
            }
            else{
                // 벽이 아닌 경우
                if(!visited[nx][ny][isBreak]){
                    queue.push([nx,ny,isBreak,cnt+1]);
                    visited[nx][ny][isBreak]=true;
                }
            }
        }
    }
  }
  console.log(-1);
  return;
}

BFS();