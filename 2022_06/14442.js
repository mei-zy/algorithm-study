class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    if (this.head === this.tail) {
      this.tail = null;
    }

    const popped = this.head;

    this.head = this.head.next;
    this.length--;

    return popped.value;
  }
}

const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const [n, m, k] = inputs.shift().split(" ").map(Number);
const graph = Array.from(Array(n), () => []);
const visited = Array.from(Array(n), () =>
  Array.from(Array(m), () => Array(k + 1).fill(Infinity))
);

for (let i = 0; i < n; i++) {
  graph[i] = inputs[i].split("").map(Number);
}

const solution = () => {
  let answer = Infinity;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const q = new Queue();
  q.enqueue([0, 0, 0]);
  visited[0][0][0] = 1;

  while (q.length) {
    const [x, y, count] = q.dequeue();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        // 1. 벽을 깨는 경우 (가중치 +1)
        if (graph[nx][ny]) {
          const nCount = count + 1;

          if (nCount > k) continue;
          if (visited[nx][ny][nCount] > visited[x][y][count] + 1) {
            // console.log(nx, ny);
            visited[nx][ny][nCount] = visited[x][y][count] + 1;
            q.enqueue([nx, ny, nCount]);
          }
          continue;
        }

        if (visited[nx][ny][count] > visited[x][y][count] + 1) {
          visited[nx][ny][count] = visited[x][y][count] + 1;
          q.enqueue([nx, ny, count]);
        }
      }
    }
  }

  answer = Math.min(...visited[n - 1][m - 1], answer);

  if (answer !== Infinity) return answer;
  return -1;
};

console.log(solution());
