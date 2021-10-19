let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let len = Number(input[0]);
// 탑의 길이
let top = input[1].split(" ");
// top에 들어온 배열들

let stack = [];
let answer=new Array(len).fill(0);

for (let i = len - 1; i >= 0; i--) {
  if (stack.length != 0 && parseInt(top[stack[stack.length - 1]]) < parseInt(top[i])) {
    while(parseInt(top[stack[stack.length - 1]]) < parseInt(top[i])){
      let x=stack.pop();
      answer[x]=i+1;
    }
  }
  stack.push(i);
}

console.log(answer.join(' '));


// 5 4 6 2 3 이면 0 1 0 3 3 이 나와야한다.
