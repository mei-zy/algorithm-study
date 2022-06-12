function solution(grid, k) {
  var answer = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < grid.length; i++) grid[i] = grid[i].split("");

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const n = grid.length - 1;
  const m = grid[0].length - 1;

  const visited = Array.from(Array(n + 1), () => Array(m + 1).fill(false));

  const bfs = () => {
    let current = -1;
    let landSum = 0;
    const q = [[0, 0, landSum]];

    visited[0][0] = true;

    while (q.length) {
      len = q.length;

      for (let i = 0; i < len; i++) {
        const [x, y, land] = q.shift();

        if (x === n && y === m) {
          landSum = land;
          break;
        }

        for (let j = 0; j < 4; j++) {
          const nx = x + dx[j];
          const ny = y + dy[j];

          if (
            nx >= 0 &&
            nx <= n &&
            ny >= 0 &&
            ny <= m &&
            !visited[nx][ny] &&
            grid[nx][ny] !== "#"
          ) {
            if (grid[nx][ny] === ".") q.push([nx, ny, land + 1]);
            else q.push([nx, ny, land]);
            visited[nx][ny] = true;
          }
        }
      }
      current++;
    }

    // console.log(landSum, current - 1);

    const need = current === k ? 0 : parseInt((current - 1) / k);
    answer = need;
  };

  bfs();
  return answer;
}

// console.log(solution(["..FF", "###F", "###."], 5));
console.log(
  solution(
    [
      ".F.FFFFF.F",
      ".########.",
      ".########F",
      "...######F",
      "##.######F",
      "...######F",
      ".########F",
      ".########.",
      ".#...####F",
      "...#......",
    ],
    6
  )
);
