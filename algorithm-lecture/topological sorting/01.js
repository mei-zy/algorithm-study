function solution(n, m, nodes) {
  let graph = Array.from(Array(n + 1), () => Array());
  let indegree = new Array(n + 1).fill(0);
  for (let [from, to] of nodes) {
    graph[from].push(to);
    indegree[to]++;
  }

  let queue = [];
  for (let i = 1; i <= n; i++) {
    if (indegree[i] === 0) queue.push(i);
  }
  // queue 초기 세팅

  let answer = [];
  while (queue.length) {
    let x = queue.shift();
    answer.push(x);
    for (let next of graph[x]) {
      indegree[next]--;
      if (indegree[next] === 0) queue.push(next);
    }
  }

  return answer.join(" ");
}
node = [
  [1, 4],
  [5, 4],
  [4, 3],
  [2, 5],
  [2, 3],
  [6, 2],
];

console.log(solution(6, 6, node));
