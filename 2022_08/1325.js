const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = inputs.shift().split(" ").map(Number);
const arr = Array.from(Array(n + 1), () => []);
let max = Number.MIN_SAFE_INTEGER;
let answer = [];

const BFS = (num) => {
  let count = 0;
  const visited = Array(n + 1).fill(false);
  visited[num] = true;
  const q = [...arr[num]];

  while (q.length) {
    const x = q.shift();
    count++;

    for (let item of arr[x]) {
      if (visited[item]) continue;

      q.push(item);
      visited[item] = true;
    }
  }
  return count;
};

for (let i = 0; i < m; i++) {
  const [to, from] = inputs[i].split(" ").map(Number);
  arr[from].push(to);
}

for (let i = 1; i <= m; i++) {
  const result = BFS(i);
  if (max < result) {
    max = result;
    answer = [i];
  } else if (max === result) answer.push(i);
}

console.log(answer.join(" "));
