class minHeap {
  constructor() {
    this.heap = [];
    this.heap.push(-Infinity);
  }
  insert(val) {
    this.heap.push(val);
    this.upheap(this.heap.length - 1);
  }
  upheap(pos) {
    let tmp = this.heap[pos];
    while (tmp < this.heap[parseInt(pos / 2)]) {
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = tmp;
  }
  get() {
    if (this.heap.length === 2) return this.heap.pop();
    let res = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.downheap(1, this.heap.length - 1);
    return res;
  }
  downheap(pos, len) {
    let tmp = this.heap[pos],
      child;
    while (pos <= parseInt(len / 2)) {
      child = pos * 2;
      if (child < len && this.heap[child] > this.heap[child + 1]) child++;
      if (tmp <= this.heap[child]) break;
      this.heap[pos] = this.heap[child];
      pos = child;
    }
    this.heap[pos] = tmp;
  }
  size() {
    return this.heap.length - 1;
  }
  front() {
    return this.heap[1];
  }
}

const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const graph = [];

for (let i = 0; i < n; i++) {
  const [, start, end] = inputs[i + 1].split(" ").map(Number);
  graph.push([start, end]);
}

graph.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

const mh = new minHeap();

mh.insert(graph[0][1]);

for (let i = 1; i < graph.length; i++) {
  const x = mh.get();
  const [start, end] = graph[i];

  if (x > start) {
    mh.insert(x);
  }

  mh.insert(end);
}

console.log(mh.size());
