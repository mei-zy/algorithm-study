const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const str1 = inputs[0];
const str2 = inputs[1];

const n = str1.length;
const m = str2.length;

const LCS = Array(n + 1);

for (let i = 0; i < n + 1; i++) {
  LCS[i] = Array(m + 1).fill(0);
}

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < m + 1; j++) {
    if (str1[i - 1] === str2[j - 1]) LCS[i][j] = LCS[i - 1][j - 1] + 1;
    else {
      LCS[i][j] = Math.max(LCS[i - 1][j], LCS[i][j - 1]);
    }
  }
}

console.log(LCS[n][m]);
