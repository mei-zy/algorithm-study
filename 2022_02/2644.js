const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const [to, from] = inputs[1].split(" ").map(Number);
const m = +inputs[2];

const graph = Array.from(Array(n + 1), () => []);
for (let i = 0; i < m; i++) {
  const [x, y] = inputs[3 + i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let visited = Array(n + 1).fill(false);

const bfs = (to) => {
  let queue = [to];
  visited[to] = true;

  curLevel = 0;

  while (queue.length) {
    const len = queue.length;
    curLevel++;

    for (let i = 0; i < len; i++) {
      const start = queue.shift();

      for (let j = 0; j < graph[start].length; j++) {
        const next = graph[start][j];

        if (next === from) return curLevel;
        if (visited[next]) continue;
        visited[next] = true;

        queue.push(next);
      }
    }
  }
  return -1;
};

const answer = bfs(to);
console.log(answer);
