const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let count = 0;
while (true) {
  let str = input.shift();
  if (str.includes("-")) break;

  let stack = [];
  count++;

  let cnt = 0;

  for (let j = 0; j < str.length; j++) {
    if (stack.length === 0 && str[j] === "}") {
      cnt++;
      stack.push("{");
    } else if (str[j] === "}") {
      stack.pop();
    } else {
      stack.push(str[j]);
    }
  }
  cnt += stack.length / 2;

  console.log(`${count}. ${cnt}`);
}
