let fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./input.txt").toString().split("\n");
// <--- 입력 예제 --->
// 3
// 26 40 83
// 49 60 57
// 13 89 99
// <----------------->

N=Number(input[0]);
color=new Array(N);
for(let i=0;i<N;i++) color[i]=input[i+1].split(' ');
// color라는 box에 얼마인지 넣기

let dp=Array.from(Array(N),()=>Array(3).fill(0));
for(let i=0;i<3;i++) dp[0][i]=Number(color[0][i]);


// dp실행
for(let i=1;i<N;i++){
  for(let j=0;j<3;j++){
    if(j===0) dp[i][j]=Math.min(dp[i-1][j+1],dp[i-1][j+2])+parseInt(color[i][j]);
    else if(j===1) dp[i][j]=Math.min(dp[i-1][j-1],dp[i-1][j+1])+parseInt(color[i][j]);
    else dp[i][j]=Math.min(dp[i-1][j-1],dp[i-1][j-2])+parseInt(color[i][j]);
  }
}

// 마지막 집 색칠 중 가장 작은 수를 골라야한다.
let answer=Number.MAX_SAFE_INTEGER;
for(let i=0;i<3;i++) answer=Math.min(answer,dp[N-1][i]);

console.log(answer);