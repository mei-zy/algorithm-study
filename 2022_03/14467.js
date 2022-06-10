let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
let answer = 0;

const left = new Set();
const right = new Set();

for (let i = 0; i < n; i++) {
  const [num, location] = input[i + 1].split(" ").map(Number);

  if (location === 0) {
    if (!left.has(num) && right.has(num)) {
      answer++;

      left.add(num);
      right.delete(num);
    } else if (!right.has(num) && !left.has(num)) {
      left.add(num);
    }
  } else {
    if (!right.has(num) && left.has(num)) {
      answer++;

      right.add(num);
      left.delete(num);
    } else if (!left.has(num) && !right.has(num)) {
      right.add(num);
    }
  }
}

console.log(answer);
