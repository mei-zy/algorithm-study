const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const num = inputs[1].split(" ").map(Number);
let cal = inputs[2].split(" ").map(Number);
// [plus, minus, multi, division]

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

const dfs = (level, sum) => {
  if (level === n) {
    max = Math.max(sum, max);
    min = Math.min(sum, min);
  }

  for (let i = 0; i < 4; i++) {
    if (cal[i] !== 0) {
      cal[i]--;
      if (i === 0) {
        dfs(level + 1, sum + num[level]);
      } else if (i === 1) {
        dfs(level + 1, sum - num[level]);
      } else if (i === 2) {
        dfs(level + 1, sum * num[level]);
      } else {
        if (sum < 0) {
          sum = Math.abs(sum);
          const result = parseInt(sum / num[level]) * -1;
          dfs(level + 1, result);
        } else dfs(level + 1, parseInt(sum / num[level]));
      }
      cal[i]++;
    }
  }
};

dfs(1, num[0]);

if (max === -0 || max === +0) console.log(0);
else console.log(max);

if (min === -0 || min === +0) console.log(0);
else console.log(min);
