function solution(bishops) {
  let answer;

  const visitedBoad = Array.from(Array(8), () => Array(8).fill(false));
  const directionX = [-1, 1, -1, 1];
  const directionY = [1, -1, -1, 1];

  const moveBishopOnBoard = (x, y) => {
    visitedBoad[x][y] = true;

    let baseI = 1;
    for (let j = 0; j < 7; j++) {
      for (let i = 0; i < 4; i++) {
        const dx = x + directionX[i] * baseI;
        const dy = y + directionY[i] * baseI;

        if (dx < 0 || dx >= 8 || dy < 0 || dy >= 8 || visitedBoad[dx][dy])
          continue;

        visitedBoad[dx][dy] = true;
      }
      baseI++;
    }
  };

  const calPossibleMoving = () => {
    let count = 0;

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (visitedBoad[i][j]) count++;
      }
    }
    return count;
  };

  for (let i = 0; i < bishops.length; i++) {
    const [string, number] = bishops[i].split("");
    const [x, y] = [string.charCodeAt(0) - "A".charCodeAt(0), +number];

    moveBishopOnBoard(x, y - 1);
  }

  const result = calPossibleMoving();
  answer = 64 - result;

  return answer;
}

console.log(solution(["C6", "A4", "E5"]));
