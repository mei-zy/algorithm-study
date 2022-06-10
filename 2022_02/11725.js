const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const graph = Array.from(Array(n + 1), () => []);
const answer = Array(n + 1);

for (let i = 0; i < n - 1; i++) {
  const [from, to] = inputs[i + 1].split(" ");

  graph[+from].push(+to);
  graph[+to].push(+from);
}

const bfs = (next) => {
  let visited = Array(n + 1).fill(false);
  visited[next] = true;

  let queue = [next];

  while (queue.length) {
    const curr = queue.shift();

    for (let i = 0; i < graph[curr].length; i++) {
      const next = graph[curr][i];

      if (!visited[next]) {
        answer[next] = curr;
        visited[next] = true;
        queue.push(next);
      }
    }
  }
};

bfs(1);
let result = "";
// answer.forEach((item, i) => (i >= 2 ? console.log(item) : null));
answer.forEach((ans, i) => (i >= 2 ? (result += ans + "\n") : null));
console.log(result);
