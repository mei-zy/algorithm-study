const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, d, k, c] = inputs[0].split(" ").map(Number);
const susi = [];

for (let i = 0; i < n; i++) {
  susi.push(+inputs[i + 1]);
}

for (let i = 0; i < k; i++) {
  susi.push(+inputs[i + 1]);
}
