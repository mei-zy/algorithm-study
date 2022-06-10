const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const t = +inputs[0];
let index = 1;
for (let i = 0; i < t; i++) {
  const m = +inputs[index++];
  const n = [];
  for (let j = 0; j < m; j++) {
    n[j] = inputs[index++].split(" ").map(Number);
  }
  console.log(hireEmployer(n));
}

function hireEmployer(n) {
  let answer = 1;
  n.sort((a, b) => a[0] - b[0]);

  let compare = n[0][1];
  for (let i = 1; i < n.length; i++) {
    if (n[i][1] > compare) continue;
    answer++;
    compare = n[i][1];
  }
  return answer;
}
