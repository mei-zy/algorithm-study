// 입력
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

const [v, e] = inputs[0].split(" ").map(Number);
const start = Number(inputs[1]);

const graph = Array.from(Array(v + 1), () => []);
const dist = Array.from(Array(v + 1), () => Infinity);

for (let i = 0; i < e; i++) {
  const [to, from, w] = inputs[i + 2].split(" ").map(Number);
  graph[to].push([from, w]);
}

const minH = new MinHeap();
// 풀이
dist[1] = 0;
minH.insert([1, 0]);
while (minH.size() > 0) {
  let tmp = minH.get();
  let now = tmp[0];
  let nowCost = tmp[1];
  if (nowCost > dist[now]) continue;
  for (let [next, cost] of graph[now]) {
    if (nowCost + cost < dist[next]) {
      dist[next] = nowCost + cost;
      minH.insert([next, dist[next]]);
    }
  }
}

for (let i = 1; i < dist.length; i++) {
  if (dist[i] === Infinity) console.log("INF");
  else console.log(dist[i]);
}
