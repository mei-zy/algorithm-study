class minHeap {
  constructor() {
    this.node = [];
  }

  insert(n) {
    this.node.push(n);
    this.upHeap();
  }

  upHeap() {
    let index = this.size() - 1;

    while (index > 0) {
      const parent = parseInt(index / 2);

      if (this.node[parent][1] < this.node[index][1]) break;

      const temp = this.node[parent];
      this.node[parent] = this.node[index];
      this.node[index] = temp;
      index = parent;
    }
  }

  get() {
    if (this.size() === 1) {
      return this.node.pop();
    }

    const target = this.node.shift();
    this.downHeap();
    return target;
  }

  downHeap() {
    const parentNode = this.node.pop();
    this.node.unshift(parentNode);

    let index = 0;
    let childIndex;

    while (index < parseInt(this.size() - 1) / 2) {
      const left = index + 1;
      const right = index + 2;

      if (
        this.node[left][1] <= this.node[right][1] ||
        this.node[right] === undefined
      ) {
        childIndex = left;
      } else {
        childIndex = right;
      }

      if (this.node[childIndex][1] >= this.node[index][1]) break;

      const temp = this.node[childIndex];
      this.node[childIndex] = this.node[index];
      this.node[index] = temp;
      index = childIndex;
    }
  }

  show() {
    for (let i = 0; i < this.node.length; i++) {
      console.log(this.node[i]);
    }
  }

  size() {
    return this.node.length;
  }
}
const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const m = +inputs[1];
const mh = new minHeap();

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

  console.log("current", current);
  for (let [next, nextCost] of graph[current]) {
    if (dp[next] > cost + nextCost) {
      dp[next] = cost + nextCost;
      mh.insert([next, dp[next]]);
    }
  }
}
console.log(dp);
