let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./input.txt").toString().split("\n");
// ----------------------
// < 입력 값 >
// 10 15
// 5 1 3 5 10 7 4 9 2 8
// ----------------------
let n = Number(input[0].split(" ")[0]);
let s = Number(input[0].split(" ")[1]);

let nums = input[1].split(" ");

// <-------- 코드 시작 ------>

let answer=Infinity;

let left=0;
let sum=0;
for(let right=0;right<n;right++){
  sum+=Number(nums[right]);
  while(sum>=s){
    answer=Math.min(answer,right-left+1);
    sum-=Number(nums[left]);
    left++;
  }
}
if(answer===Infinity) console.log(0);
else console.log(answer);