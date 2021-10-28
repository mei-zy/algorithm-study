const { log } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// <---입력 예제--->
// 4
// 2 3 3 1
// 1 2 1 3
// 1 2 3 1
// 3 1 1 0
// <--------------->
let N=Number(input.shift());
// console.log(N);

let board=Array.from(Array(N));
let dp=Array.from(Array(N),()=>new Array(N).fill(BigInt(0)));

for(let i=0;i<N;i++){
  board[i]=input[i].split(' ');
  for(let j=0;j<N;j++) board[i][j]=Number(board[i][j]);
}
// 입력받고 정수화 시키기
dp[0][0]=BigInt(1);
for(let k=0;k<N;k++){
  for(let t=0;t<N;t++){
    if(dp[k][t]!==0 && board[k][t]!==0){
      let len=board[k][t];
      if((k+len)>=0 && (k+len)<N) dp[k+len][t]+=dp[k][t];
      if((t+len)>=0 && (t+len)<N) dp[k][t+len]+=dp[k][t];
    }
  }
}
console.log(dp[N-1][N-1].toString());