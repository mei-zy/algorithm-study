const fs = require("fs");
const [nm, ...input] = fs
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = nm.split(" ").map(Number);
const array = input.map((el) => el.split(" ").map(Number));

const graph = Array.from(Array(n + 1), () => []);
const count = Array(n + 1).fill(0);

const BFS = (num) => {
  const q = [num];
  const visited = Array(n + 1).fill(false);
  visited[num] = true;
  let count = 0;

  while (q.length) {
    const currentNode = q.shift();

    for (let nextNode of graph[currentNode]) {
      if (visited[nextNode]) continue;

      visited[nextNode] = true;
      q.push(nextNode);
      count += 1;
    }
  }

  return count;
};

for (const [x, y] of array) {
  graph[y].push(x);
}

for (let i = 1; i <= n; i++) {
  count[i - 1] = BFS(i);
}

const max = Math.max(...count);
let answer = [];
count.forEach((com, idx) => (com === max ? answer.push(idx + 1) : ""));

console.log(...answer);
