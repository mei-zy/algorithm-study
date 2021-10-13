const fs = require("fs");
const { PassThrough } = require("stream");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

split2 = input[0].split(" ");

// <-- 문제 풀이 --->
// split2[0] : 명 수(n) , split2[1] : k

let N = parseInt(split2[0]);
let K = parseInt(split2[1]);
// console.log(solution(parseInt(split2[0]),parseInt(split2[1])));
let queue = new Array(N).fill().map((v, i) => i + 1);
let answer = [];

while (queue.length > 0) {
  for (let i = 0; i < K; i++) queue.push(queue.shift());
  answer.push(queue.pop());
}
console.log(`<${answer.join(", ")}>`);
