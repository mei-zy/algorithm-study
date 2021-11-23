const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .split("\n");

let [n, m] = inputs[0].split(" ").map(Number);
let graph = Array.from(Array(n + 1), () => Array());
let indegree = new Array(n + 1).fill(0);

for (let i = 0; i < m; i++) {
  let [x, y] = inputs[i + 1].split(" ").map(Number);
  graph[x].push(y);
  indegree[y]++;
  // 그래프 초기화
}

let queue = [];
let answer = [];
for (let i = 1; i <= n; i++) {
  if (indegree[i] === 0) queue.push(i);
}

while (queue.length) {
  let nx = queue.shift();
  answer.push(nx);
  for (let next of graph[nx]) {
    indegree[next]--;
    if (indegree[next] === 0) queue.push(next);
  }
}

console.log(answer.join(" "));
