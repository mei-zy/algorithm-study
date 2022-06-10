let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const arr = Array(n).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i === j) continue;

    const [x, y] = input[i].split(" ").map(Number);
    const [p, q] = input[j].split(" ").map(Number);

    if (x < p && y < q) arr[i]++;
  }
}

const answer = arr.map((tmp) => tmp + 1);
console.log(answer.join(" "));
