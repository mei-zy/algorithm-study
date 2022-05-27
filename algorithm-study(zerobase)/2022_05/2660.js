const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const dist = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
const res = new Array(n + 1).fill(0);

let answer = [];

let index = 1;

while (true) {
  const [to, from] = inputs[index++].split(" ").map(Number);
  if (to === -1 && from === -1) break;

  dist[to][from] = 1;
  dist[from][to] = 1;
}

for (let i = 1; i <= n; i++) {
  dist[i][i] = 0;
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    for (let k = 1; k <= n; k++) {
      dist[j][k] = Math.min(dist[j][k], dist[j][i] + dist[i][k]);
    }
  }
}

let min = Number.MAX_SAFE_INTEGER;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === j) continue;
    res[i] = Math.max(res[i], dist[i][j]);
  }
  min = Math.min(min, res[i]);
}

let cnt = 0;
for (let i = 1; i <= n; i++) {
  if (res[i] === min) {
    answer.push(i);
    cnt++;
  }
}

console.log(`${min} ${cnt}`);
console.log(answer.join(" "));
