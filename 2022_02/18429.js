const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = inputs[0].split(" ").map(Number);
const arr = inputs[1].split(" ").map(Number);

for (let i = 0; i < n; i++) {
  arr[i] -= k;
}

let answer = 0;

let weight = 500;
let visited = Array(n).fill(false);

const DFS = (curr) => {
  if (curr === n) {
    answer++;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    if (weight + arr[i] >= 500) {
      visited[i] = true;
      weight += arr[i];
      DFS(curr + 1);
      weight -= arr[i];
      visited[i] = false;
    }
  }
};

DFS(0);
console.log(answer);
