const fs = require("fs");
const { PassThrough } = require("stream");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// input[0] : 명수
// input[1] : 인원에 따른 기다리는 시간
let splited=input[1].split(' ');
splited.sort((a,b)=>parseInt(a)-parseInt(b));


let sum=0,
    count=0;
for(let i=0;i<splited.length;i++){
  sum+=parseInt(splited[i]);
  splited[i]=sum;
  count+=splited[i];
}
console.log(count);
