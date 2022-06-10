const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .join("");

const [n, m] = inputs.split(" ").map(Number);

let x = n;
for (let i = 0; i < m; i++) {
  x = x * (n - 1);
}
let y = 1;

for (let i = 1; i <= m; i++) {
  y = y * i;
}

console.log(x / y);
