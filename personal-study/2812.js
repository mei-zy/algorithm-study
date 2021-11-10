const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let number = input[1];

let stack = [];
let pop = 0;
for (let i = 0; i < n; i++) {
  if (stack.length && Number(number[i]) > Number(stack[stack.length - 1])) {
    while (Number(stack[stack.length - 1]) < Number(number[i])) {
      if(pop===k) break;
      stack.pop();
      pop++;
    }
  }
  stack.push(number[i]);
}

while(pop<k){
  stack.pop();
  pop++;
}
let answer=stack.join('');
console.log(answer);
