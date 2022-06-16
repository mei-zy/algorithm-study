function solution(board, moves) {
  var answer = 0;

  let bucket = [];
  const boardHeight = board.length;

  for (const move of moves) {
    for (let j = 0; j < boardHeight; j++) {
      if (board[j][move - 1]) {
        if (bucket[bucket.length - 1] === board[j][move - 1]) {
          bucket.pop();
          answer += 2;
        } else {
          bucket.push(board[j][move - 1]);
        }

        board[j][move - 1] = 0;
        break;
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 3, 3, 3, 4],
      [3, 2, 1, 3, 3],
      [3, 1, 2, 1, 2],
      [3, 2, 1, 4, 6],
      [4, 5, 2, 3, 1],
    ],
    [1, 2, 3, 4, 5]
  )
);
