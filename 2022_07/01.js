const solution = (n, k, board) => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0 - 1];
  const hint = [];
  let totalLen = 0;

  // const bfs = (startX, startY, endX, endY) => {
  //   const visited=Array.from(Array(n),Array.from)
  // };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] !== 0) hint.push([board[i][j], i, j]);
    }
  }

  hint.sort((a, b) => a[0] - b[0]);
  console.log(hint);
  for (let i = 0; i < hint.length - 1; i++) {
    const [, curX, curY] = hint[i];
    const [, nextX, nextY] = hint[i + 1];
    // console.log(Math.abs(nextX - curX) + Math.abs(nextY - curY));
    totalLen += Math.abs(curX - nextX) + Math.abs(curY - nextY);
    // bfs(curX, curY, nextX, nextY);
  }

  return totalLen;
};
// console.log(
//   solution(6, 4, [
//     [0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 3, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 2, 0, 0],
//     [0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 4, 0, 0],
//   ])
// );

console.log(
  solution(7, 10, [
    [0, 0, 8, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 0],
    [6, 10, 0, 0, 0, 0, 0],
    [9, 0, 0, 0, 0, 0, 0],
    [0, 1, 3, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 0, 7],
  ])
);
