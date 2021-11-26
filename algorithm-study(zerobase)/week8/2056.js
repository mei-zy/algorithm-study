// https://www.acmicpc.net/problem/2056

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

let n = Number(input[0]);
let graph = Array.from(Array(n + 1), () => Array());
let indegree = new Array(n + 1).fill(0);
let time = new Array(n + 1);

// 그래프 완성시키기
for (let i = 1; i <= n; i++) {
  let tmp = input[i].split(" ").map(Number);
  time[i] = tmp[0];
  if (tmp[1] !== 0) {
    // 추가할 것이 있는 경우
    for (let j = 2; j < tmp.length; j++) {
      graph[tmp[j]].push(i);
      indegree[i]++;
    }
  }
}

// indegree 0인 걸 초기화시켜주고, dp 초기값 초기화
let queue = [];
let dp = new Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  if (indegree[i] === 0) {
    queue.push(i);
    dp[i] = time[i];
  }
}
/*
console.log(dp);
console.log(queue);
*/
while (queue.length) {
  let x = queue.shift();
  for (let next of graph[x]) {
    indegree[next]--;
    dp[next] = Math.max(dp[next], dp[x] + time[next]);
    if (indegree[next] === 0) queue.push(next);
  }
}
console.log(Math.max(...dp));
