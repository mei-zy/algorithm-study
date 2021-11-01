const { log } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let number=input[0].split(' ');

// N : 남은 일수, M : 챕터의 수

let N=Number(number[0]);
let M=Number(number[1]);

let dp=new Array(N+1).fill(0);
let read=Array.from(Array(M),()=>new Array(2));

for(let i=0;i<M;i++){
  let split=input[i+1].split(' ');
  read[i][0]=Number(split[0]);
  read[i][1]=Number(split[1]);
}

for(let i=0;i<M;i++){
  let day=read[i][0];
  let book=read[i][1];
  for(let j=N;j>=day;j--){
    dp[j]=Math.max(dp[j],dp[j-day]+book);
  }
}

console.log(dp[N]);