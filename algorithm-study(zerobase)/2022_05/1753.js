// 입력

const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [v, e] = inputs[0].split(" ").map(Number);
const start = Number(inputs[1]);

const graph = Array.from(Array(v + 1), () => []);
const dp = Array.from(Array(v + 1), () => Infinity);

for (let i = 0; i < e; i++) {
  const [to, from, w] = inputs[i + 2].split(" ").map(Number);
  graph[to].push([from, w]);
}

// minheap
class minHeap {
  constructor() {
    this.heap = [];
    this.heap.push([Number.MIN_SAFE_INTEGER, 0]);
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

// 풀이
dp[start] = 0;
let minH = new minHeap();
minH.insert([1, 0]);
while (minH.size() > 0) {
  let tmp = minH.get();
  let now = tmp[0];
  let nowCost = tmp[1];
  if (nowCost > dp[now]) continue;
  for (let [next, cost] of graph[now]) {
    if (nowCost + cost < dp[next]) {
      dp[next] = nowCost + cost;
      minH.insert([next, dp[next]]);
    }
  }
}

for (let i = 1; i <= v; i++) {
  if (dp[i] === Infinity) {
    console.log("INF");
    continue;
  }
  console.log(dp[i]);
}
