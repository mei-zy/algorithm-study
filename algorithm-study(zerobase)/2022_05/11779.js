class MinHeap {
  constructor() {
    this.nodes = [];
  }
  insert(value) {
    this.nodes.push(value);
    this.upheap();
  }
  upheap() {
    let index = this.nodes.length - 1;
    let node = this.nodes[index];

    let parentNodeIndex = Math.floor((index - 1) / 2);
    while (index > 0 && node[1] < this.nodes[parentNodeIndex][1]) {
      this.nodes[index] = this.nodes[parentNodeIndex];
      index = parentNodeIndex;
      parentNodeIndex = Math.floor((index - 1) / 2);
    }
    this.nodes[index] = node;
  }
  downheap() {
    let index = 0;
    let node = this.nodes[index];

    while (index <= Math.floor((this.size() - 1) / 2)) {
      let childNodeIndex = index * 2 + 1;
      if (
        childNodeIndex < this.size() &&
        this.nodes[childNodeIndex + 1] &&
        this.nodes[childNodeIndex][1] > this.nodes[childNodeIndex + 1][1]
      ) {
        childNodeIndex += 1;
      }

      if (
        !this.nodes[childNodeIndex] ||
        node[1] <= this.nodes[childNodeIndex][1]
      ) {
        break;
      }

      this.nodes[index] = this.nodes[childNodeIndex];
      index = childNodeIndex;
    }
    this.nodes[index] = node;
  }
  get() {
    if (this.size() === 1) {
      return this.nodes.pop();
    }
    const node = this.nodes[0];
    this.nodes[0] = this.nodes.pop();
    this.downheap();
    return node;
  }
  size() {
    return this.nodes.length;
  }
}

const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const m = +inputs[1];
const mh = new MinHeap();

let index = 2;
const graph = Array.from(Array(n + 1), () => []);
const dp = new Array(n + 1).fill(Infinity);

for (let i = 0; i < m; i++) {
  const [to, from, w] = inputs[index++].split(" ").map(Number);
  graph[to].push([from, w]);
  graph[from].push([to, w]);
}

const [to, from] = inputs[index].split(" ").map(Number);

dp[to] = 0;
mh.insert([to, 0]);

console.log(graph);
while (mh.size()) {
  const [current, cost] = mh.get();

  for (let [next, nextCost] of graph[current]) {
    if (dp[next] > cost + nextCost) {
      dp[next] = cost + nextCost;
      mh.insert([next, dp[next]]);
    }
  }
}
console.log(dp);
