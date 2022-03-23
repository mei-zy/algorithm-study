function solution(n, edges) {
  var answer = 0;

  let graph = Array.from(Array(n), () => []);
  let dp = Array.from(Array(n), () => Array(n).fill(Infinity));
  for (let i = 0; i < edges.length; i++) {
    const [start, end] = edges[i];

    graph[start].push(end);
    graph[end].push(start);
  }

  const BFS = (start) => {
    let queue = [start];
    let visited = Array(n).fill(false);
    visited[start] = true;
    let level = 1;

    while (queue.length) {
      const len = queue.length;

      for (let i = 0; i < len; i++) {
        const x = queue.shift();

        for (let j = 0; j < graph[x].length; j++) {
          const tmp = graph[x][j];
          // console.log("start:", start, "x:", x, "tmp:", tmp);
          if (!visited[tmp]) {
            dp[x][tmp] = level;
            dp[tmp][x] = level;
            if (level >= 2) {
              answer++;
            }
            queue.push(tmp);
            visited[tmp] = true;
          }
        }
      }
      level++;
    }
  };

  for (let i = 0; i < n; i++) {
    BFS(i);
  }
  console.log(dp);
  return answer;
}

console.log(
  solution(5, [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
  ])
);

console.log(
  solution(4, [
    [2, 3],
    [0, 1],
    [1, 2],
  ])
);
