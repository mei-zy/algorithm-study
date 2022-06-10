class minHeap {
  constructor() {
    this.heap = [];
    this.heap.push([Number.MIN_SAFE_INTEGER]);
  }
  insert([a, b]) {
    this.heap.push([a, b]);
    this.upheap(this.heap.length - 1);
  }
  upheap(pos) {
    let tmp = this.heap[pos];
    while (tmp[1] < this.heap[parseInt(pos / 2)][1]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = tmp;
  }
  get() {
    if (this.heap.length === 2) {
      return this.heap.pop();
    }
    let res;
    res = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1);
    return res;
  }
  downheap(pos, len) {
    let tmp, i;
    tmp = this.heap[pos];
    while (pos <= parseInt(len / 2)) {
      i = pos * 2;
      if (i < len && this.heap[i][1] < this.heap[i + 1][1]) i++;
      if (tmp[1] <= this.heap[i][1]) break;
      this.heap[pos] = this.heap[i];
      pos = i;
    }
    this.heap[pos] = tmp;
  }
  size() {
    return this.heap.length - 1;
  }
  top() {
    return this.heap[1];
  }
}

const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const m = +inputs[1];
const graph = Array.from(Array(n + 1), () => []);
const path = Array.from(Array(n + 1), () => []);
const dp = Array(n + 1).fill(Infinity);
const mh = new minHeap();

for (let i = 0; i < m; i++) {
  const [a, b, c] = inputs[i + 2].split(" ").map(Number);
  graph[a].push([b, c]);
}

const [to, from] = inputs[m + 2].split(" ").map(Number);

mh.insert([to, 0]);
dp[to] = 0;

while (mh.size()) {
  const [node, w] = mh.get();

  if (dp[node] < w) continue;

  for (let [next, cost] of graph[node]) {
    if (dp[next] > dp[node] + cost) {
      dp[next] = dp[node] + cost;
      mh.insert([next, dp[node] + cost]);
      path[next] = [...path[node], node];
      // console.log("node", node);
      // console.log("next", next);
      // console.log(dp);
    }
  }
}

console.log(dp[from]);
path[from].push(from);
console.log(path[from].length);
console.log(path[from].join(" "));
