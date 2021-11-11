const { log } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const input = require('readline'); 
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });


let n=Number(input[0]);
let colors=Array.from(Array(2), ()=>Array());
for(let i=0;i<n;i++){
  let splited=input[1+i].split(' ').map(Number);
  let color=splited[1];
  colors[color-1].push(splited[0]);
}

// 정렬
colors.forEach(arr => arr.sort((a,b) => a-b));
console.log(colors);
let len=0;
// 1. 흰색 거리 계산
for(let i=0;i<colors[0].length;i++){
  if(i===0){
    // 첫돌인 경우
    len+=colors[0][i+1]-colors[0][i]
  }
  else if(i===colors[0].length-1){
    // 마지막 돌인 경우
    len+=colors[0][i]-colors[0][i-1];
  }
  else{
    // min 값 계산
    len+=Math.min(colors[0][i]-colors[0][i-1],colors[0][i+1]-colors[0][i]);
  }
}

// 2. 검은색 거리 계산
for(let i=0;i<colors[1].length;i++){
  if(i===0){
    // 첫돌인 경우
    len+=colors[1][i+1]-colors[1][i]
  }
  else if(i===colors[1].length-1){
    // 마지막 돌인 경우
    len+=colors[1][i]-colors[1][i-1];
  }
  else{
    // min 값 계산
    len+=Math.min(colors[1][i]-colors[1][i-1],colors[1][i+1]-colors[1][i]);
  }
}
console.log(len);
