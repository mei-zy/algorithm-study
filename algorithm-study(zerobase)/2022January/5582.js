const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const a = inputs[0];
const b = inputs[1];

let dp = Array.from(Array(b.length), () => Array(a.length));

for (let i = 0; i < a.length; i++) {
  if (a[i] === b[0]) dp[0][i] = 1;
  else dp[0][i] = 0;
}

let answer = 0;
for (let j = 1; j < b.length; j++) {
  for (let k = 0; k < b.length; k++) {
    if (k === 0) {
      if (a[k] === b[j]) dp[j][k] = 1;
      else dp[j][k] = 0;
    } else {
      if (a[k] !== b[j]) dp[j][k] = 0;
      else {
        dp[j][k] = dp[j - 1][k - 1] + 1;
        answer = Math.max(answer, dp[j][k]);
      }
    }
  }
}
console.log(answer);
