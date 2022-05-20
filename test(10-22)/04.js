function solution(n, paths, gates, summits) {
  var answer = [];

  const graph = Array.from(Array(n + 1), () => []);

  for (let [to, from, w] of paths) {
    graph[to].push([from, w]);
    graph[from].push([to, w]);
  }

  const calDfs = (start) => {
    const visited = Array(n + 1).fill(false);
    const result = [];
    visited[start] = true;

    const dfs = (now, max, level) => {
      if (summits.includes(now)) {
        result.push([now, max]);
        return;
      }

      if (now !== start && gates.includes(now)) {
        return;
      }
      if (level === n) {
        return;
      }

      for (let [to, w] of graph[now]) {
        if (visited[to]) continue;

        visited[to] = true;
        dfs(to, Math.max(w, max), level + 1);
        visited[to] = false;
      }
    };

    dfs(start, -Infinity, 0);

    return result;
  };

  let temp = [];
  for (let gate of gates) {
    const result = calDfs(gate, 0);
    temp = [...temp, ...result];
  }

  temp.sort((a, b) => (a[1] === b[1] ? b[0] - a[0] : b[1] - a[1]));

  answer = temp[temp.length - 1];

  return answer;
}

console.log(
  solution(
    7,
    [
      [1, 4, 4],
      [1, 6, 1],
      [1, 7, 3],
      [2, 5, 2],
      [3, 7, 4],
      [5, 6, 6],
    ],
    [1],
    [2, 3, 4]
  )
);
