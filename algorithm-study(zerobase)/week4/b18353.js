// <---입력 예제---->
// 7
// 15 11 4 8 5 2 4
// <---------------->

const { log } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N=Number(input[0]);
let war=input[1].split(' ');
for(let i=0;i<N;i++) war[i]=Number(war[i]);


dp=new Array(N).fill(1);
dp[0]=1;

let max=Number.MIN_SAFE_INTEGER;
for(let i=1;i<N;i++){
  let max2=Number.MIN_SAFE_INTEGER;
  for(let j=i-1;j>=0;j--){
    if(war[j]>war[i]){
      max2=Math.max(max2,dp[j]);
      dp[i]=max2+1;
    }
  }
  max=Math.max(max,dp[i]);
}
if(max===Number.MIN_SAFE_INTEGER) console.log(0);
else console.log(N-max);