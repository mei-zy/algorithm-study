const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const arr1 = inputs[0];
const arr2 = inputs[1];

const dp = Array.from(Array(arr1.length + 1), () =>
  Array(arr2.length + 1).fill(0)
);

let answer = 0;
for (let i = 1; i < arr1.length + 1; i++) {
  for (let j = 1; j < arr2.length + 1; j++) {
    if (arr1[i - 1] === arr2[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else dp[i][j] = 0;

    answer = Math.max(answer, dp[i][j]);
  }
}
console.log(answer);
