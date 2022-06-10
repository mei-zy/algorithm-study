const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = 0;
let current = 0;

const [n, m] = inputs[0].split(" ").map(Number);
const cakes = inputs[1].split(" ").map(Number);
const sortedCakes = [];

for (let cake of cakes) {
  if (cake === 10) sortedCakes.push([-Infinity, 1]);
  else {
    if (cake < 20) {
      sortedCakes.push([parseInt(cake / 10), parseInt(cake / 10)]);
    } else sortedCakes.push([parseInt(cake / 10) - 1, parseInt(cake / 10)]);
  }
}

sortedCakes.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));

console.log(sortedCakes);
for (let [need, cake] of sortedCakes) {
  if (cake === 1 && need === -Infinity) {
    answer++;
    continue;
  }
  if (current === m) break;

  if (need + current > m) {
    const tmp = m - current;
    answer += tmp;
    break;
  } else {
    current += need;
    answer += cake;
  }

  // console.log("need", need, "cake", cake);
  // console.log("current", current, "answer", answer);
}

console.log(answer);
