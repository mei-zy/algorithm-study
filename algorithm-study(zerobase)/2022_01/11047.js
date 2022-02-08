const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [n, k] = inputs[0].split(" ").map(Number);
const coins = [];

for (let i = 0; i < n; i++) coins.push(Number(inputs[i + 1]));

let change = k;
let answer = 0;

for (let i = n - 1; i >= 0; i--) {
  if (!change) break;
  if (change < coins[i]) continue;
  answer += parseInt(change / coins[i]);
  change = parseInt(change % coins[i]);
}
console.log(answer);
