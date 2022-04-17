const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, x] = inputs[0].split(" ").map(Number);
const board = inputs[1].split(" ").map(Number);

let answer = Number.MIN_SAFE_INTEGER;
let count = 1;
let sum = 0;

for (let i = 0; i < x; i++) {
  sum += board[i];
}
answer = sum;

for (let i = 0; i < n - x; i++) {
  sum -= board[i];
  sum += board[i + x];

  if (answer < sum) {
    answer = sum;
    count = 1;
  } else if (answer === sum) count++;
  else continue;
}

if (answer > 0) {
  console.log(answer);
  console.log(count);
} else {
  console.log("SAD");
}
