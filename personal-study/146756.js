const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .split("\n");

let [n, m, k] = inputs[0].split(" ").map(Number);

let graph = Array.from(Array(n + 1), () => new Array());
let indegree = new Array(n + 1).fill(0);

// built 변수 : 건물을 세웠는지 안세웠는지 체크한다.
let built = new Array(n + 1).fill(0);

for (let i = 0; i < m; i++) {
  let [nx, ny] = inputs[1 + i].split(" ").map(Number);
  graph[nx].push(ny);
  indegree[ny]++;
}

function solution() {
  for (let i = 0; i < k; i++) {
    let [nx, ny] = inputs[1 + m + i].split(" ").map(Number);

    if (nx === 1) {
      // 건설하는 경우
      if (indegree[ny] === 0) {
        // 건설가능 경우
        if (built[ny] === 0) {
          // 아직 건설 안된 경우
          for (let next of graph[ny]) indegree[next]--;
        }
        built[ny]++;
      } else {
        return "Lier!";
      }
    } else {
      if (built[ny] !== 0) {
        // 이미 건설된 경우
        built[ny]--;
        if (built[ny] === 0) {
          for (let next of graph[ny]) indegree[next]++;
        }
      } else {
        return "Lier!";
      }
    }
  }
  return "King-God-Emperor";
}

console.log(solution());
