function solution(room, x1, y1, x2, y2) {
  var answer = 0;

  const n = room.length;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const q = [[x1, y1]];

  const bfs = (x, y) => {
    while (q.length) {
      let curr = q.shift();
      let x = curr[0];
      let y = curr[0];

      for (let i = 0; i < 4; i++) {
        let xx = x;
        let yy = y;

        while (
          x + dx[i] >= 0 &&
          x + dx[i] < n &&
          y + dy[i] >= 0 &&
          y + dy[i] < n &&
          room[x + dx[i]][y + dy[i]] != 1
        ) {
          if (room[x + dx[i]][y + dy[i]] === 0) {
            q.push([x + dx[i], y + dy[i]]);
            room[x + dx[i]][y + dy[i]] = room[x][y] + 1;
          }
          xx = xx + dx[i];
          yy = yy + dy[i];
        }
      }
    }
  };

  bfs();

  return room[x2][y2] === 0 ? -1 : room[x2][y2] - 3;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0, 0, 0, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    ],
    0,
    0,
    9,
    8
  )
);
