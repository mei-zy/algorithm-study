const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, s] = inputs[0].split(" ").map(Number);
const arr = inputs[1].split(" ").map(Number);
let count = 0;

const pick = [];
const dfs = (level) => {
  if (level === n) {
    const sum = pick.reduce((sum, val) => sum + val, 0);
    if (sum === s) count++;
    return;
  }
  pick.push(arr[level]);
  dfs(level + 1);
  pick.pop();
  dfs(level + 1);
};

dfs(0);

if (s === 0) count--;
console.log(count);
