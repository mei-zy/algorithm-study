const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];

const dp = Array.from(Array(41), () => Array(2));

dp[0] = [1, 0];
dp[1] = [0, 1];

for (let i = 2; i < 41; i++) {
  const [zero, one] = [
    dp[i - 1][0] + dp[i - 2][0],
    dp[i - 1][1] + dp[i - 2][1],
  ];
  dp[i] = [zero, one];
}

for (let i = 0; i < n; i++) {
  const k = +inputs[i + 1];

  console.log(dp[k].join(" "));
}
