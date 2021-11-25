const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let string = inputs[0].trim();
let bomb = inputs[1].trim();

let stack = [];

for (let i = 0; i < string.length; i++) {
  stack.push(string[i]);
  let flag = true;
  if (string[i] === bomb[bomb.length - 1] && stack.length >= bomb.length) {
    for (let j = 1; j <= bomb.length; j++) {
      if (stack[stack.length - j] !== bomb[bomb.length - j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      // 참인 경우 -> 빼야하는 경우
      for (let j = 0; j < bomb.length; j++) stack.pop();
    }
  }
}
if (stack.length === 0) console.log("FRULA");
else console.log(stack.join(""));
