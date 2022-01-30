const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const n = Number(inputs.shift());
let team = [];
let checked = new Array(n).fill(false);
let answer = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < n; i++) {
  team[i] = inputs[i].split(" ").map(Number);
}

function DFS(currentLevel) {
  if (currentLevel === n / 2) {
    let sum = 0;

    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (checked[j] === checked[k]) {
          if (checked[j]) sum += team[j][k];
          else sum -= team[j][k];
        }
      }
    }
    // answer = Math.min(answer, Math.abs(sum));
    answer = answer > Math.abs(sum) ? Math.abs(sum) : answer;
    return;
  }

  for (let i = currentLevel; i < n; i++) {
    checked[i] = true;
    DFS(currentLevel + 1);
    checked[i] = false;
  }
}

DFS(0);
console.log(answer);
