const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [n, m] = inputs[0].split(" ").map(Number);
const books = inputs[1].split(" ").map(Number);
let answer = 0;

let positive = [];
let negative = [];
let max = 0;

for (let book of books) {
  max = Math.max(max, Math.abs(book));

  if (book < 0) negative[negative.length] = Math.abs(book);
  else positive[positive.length] = book;
}
// 내림차순 정리
if (positive.length) positive.sort((a, b) => b - a);
if (negative.length) negative.sort((a, b) => b - a);

for (let i = 0; i < negative.length; ) {
  if (negative[i] === max) answer += negative[i];
  else answer += negative[i] * 2;

  i += m;
}

for (let j = 0; j < positive.length; ) {
  if (positive[j] === max) answer += positive[j];
  else answer += positive[j] * 2;
  j += m;
}

console.log(answer);
