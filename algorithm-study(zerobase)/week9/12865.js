const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let [n, k] = input[0].split(" ").map(Number);

let arr = new Array();
const dp = Array(k + 1).fill(0);
for (let i = 0; i < n; i++) {
  arr[i] = input[i + 1].split(" ").map(Number);
  // 입력 받기
  for (let j = k; j >= arr[i][0]; j--) {
    dp[j] = Math.max(dp[j], arr[i][1] + dp[j - arr[i][0]]);
  }
}
console.log(Math.max(...dp));
