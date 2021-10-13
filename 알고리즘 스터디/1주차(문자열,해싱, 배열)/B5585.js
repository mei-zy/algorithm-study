const fs = require("fs");
const { PassThrough } = require("stream");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// <---- 풀이 시작 ---->
let paid = 1000-parseInt(input);
//  잔돈 목록 배열
let change=[500,100,50,10,5,1];
let count=sum=0;

for(let i=0;i<change.length;i++){
  sum=parseInt(paid/change[i]);
  paid-=(sum*change[i]);
  count+=sum;

  if(paid==0) break;
}
console.log(count);
