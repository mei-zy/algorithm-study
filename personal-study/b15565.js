// https://www.acmicpc.net/problem/15565
let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./input.txt").toString().split("\n");
// <-------입력예제------>
// 10 3
// 1 2 2 2 1 2 1 2 2 1
// <-------------------->

split2 = input[0].split(" ");

// N= 가지고 있는 인형의 수, K는 라이언만
let N = parseInt(split2[0]);
let K = parseInt(split2[1]);
let toy=input[1].split(" ");

let len=Number.MAX_SAFE_INTEGER;
let left=0;
let count=0;
for(let right=0;right<toy.length;right++){
  if(parseInt(toy[right])===1) count++;
  while(count===K){
    if(parseInt(toy[left])===1) count--;
    len=Math.min(len,right-left+1);
    left++;
  }
}

if(len===Number.MAX_SAFE_INTEGER) console.log(-1);
else console.log(len);