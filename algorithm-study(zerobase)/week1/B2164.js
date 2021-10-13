const { SlowBuffer } = require("buffer");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num=parseInt(input[0]);
let queue=new Array(num).fill().map((v,i)=>i+1);

for(let i=0;i<num;i++){
  if(queue.length===1) break;
  queue.shift();
  queue.push(queue.shift());
}
console.log(parseInt(queue));