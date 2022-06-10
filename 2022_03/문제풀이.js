const solution = (n, bread, edges) => {
  const g = Array.from(Array(n), () => []);
  const max = Math.max(...bread);

  for (let [from, to] of edges) {
    g[from].push(to);
    g[to].push(from);
  }

  let answer = Number.MIN_SAFE_INTEGER;
  const dfs = (level, current, curBread) => {
    if (level === max) {
      answer = Math.max(curBread, answer);
      return;
    }

    let eat = 0;
    if (bread[current] - level > 0) {
      eat = 1;
    }

    for (let edge of g[current]) {
      dfs(level + 1, edge, curBread + eat);
    }
  };

  dfs(0, 0, 0);
  console.log(answer);
};

console.log(
  solution(
    7,
    [0, 1, 2, 2, 3, 2, 1],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 4],
      [2, 5],
      [5, 6],
    ]
  )
);

console.log(
  solution(
    7,
    [0, 5, 4, 2, 2, 0, 1],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 4],
      [2, 5],
      [5, 6],
    ]
  )
);
