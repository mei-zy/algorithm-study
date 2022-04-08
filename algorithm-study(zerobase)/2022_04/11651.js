const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const arr = [];

for (let i = 0; i < n; i++) {
  arr[i] = inputs[i + 1].split(" ").map(Number);
}

arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let answer = "";
arr.forEach(([a, b], num) => {
  if (num === arr.length - 1) answer += `${a} ${b}`;
  else answer += `${a} ${b}\n`;
});

console.log(answer);
