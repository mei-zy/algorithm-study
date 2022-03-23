function solution(n, clockwise) {
  var answer = Array.from(Array(n), () => Array(n));

  const base = Math.round(n / 2);

  if (clockwise === true) {
    // 첫번째
    let firstCnt = 1;
    for (let i = 0; i < n - 1; i++) {
      answer[0][i] = firstCnt++;
    }
    for (let j = 1; j < base; j++) {
      answer[j][n - 2] = firstCnt++;
      if (j === n - 3) answer[j][n - 3] = firstCnt++;
    }

    let secondCnt = 1;
    for (let i = 0; i < n - 1; i++) {
      answer[i][n - 1] = secondCnt++;
    }
    for (let j = n - 2; j >= n - 3; j--) {
      answer[n - 2][j] = secondCnt++;
      if (j === n - 1) {
        for (let k = n - 2; k >= base; k--) {
          answer[k][j];
        }
      }
    }

    let thirdCnt = 0;
  }
  return answer;
}

console.log(solution(5, true));
