function solution(p) {
  const n = p.length;
  let answer = new Array(n).fill(0);

  let i = 0;
  let tmpP = new Array(n);

  for (let k = 0; k < n; k++) {
    tmpP[k] = [p[k], k];
  }

  while (i < n) {
    let min = Number.MAX_SAFE_INTEGER;
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (min <= tmpP[j][0]) continue;
      min = tmpP[j][0];
      minIndex = j;
    }

    if (min < tmpP[i][0]) {
      const tmp = tmpP[i];
      tmpP[i] = tmpP[minIndex];
      tmpP[minIndex] = tmp;

      answer[i]++;
      answer[minIndex]++;
    }
    i++;
  }

  return answer;
}

console.log(solution([2, 5, 3, 1, 4]));
