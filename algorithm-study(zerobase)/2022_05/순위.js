function solution(n, results) {
  var answer = 0;

  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));

  for (let [win, lose] of results) {
    graph[win][lose] = true;
    graph[lose][win] = false;
    graph[win][win] = 0;
    graph[lose][lose] = 0;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (graph[i][j] === Infinity) {
          if (graph[i][k] === true && graph[k][j] === true) graph[i][j] = true;
          if (graph[i][k] === false && graph[k][j] === false)
            graph[i][j] = false;
        }
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    let cnt = 0;
    for (let j = 1; j <= n; j++) {
      if (i === j) continue;
      if (graph[i][j] !== Infinity) cnt++;
    }
    if (cnt === n - 1) answer++;
  }

  return answer;
}

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
);
