const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = inputs[0];
let dp = [0, 1, 2, 4];

for (let i = 4; i <= 11; i++) {
  let sum = 0;

  for (let j = 1; j <= 3; j++) {
    const x = i - j;
    sum += dp[x];
  }

  dp.push(sum);
}

for (let i = 0; i < n; i++) {
  const num = inputs[i + 1];

  console.log(dp[num]);
}
