function solution(n, lost, reserve) {
  var answer = 0;

  const student = new Array(n + 1).fill(true);
  let count = 0;

  for (let x of lost) {
    const index = reserve.indexOf(x);
    if (index !== -1) {
      const prev = reserve.slice(0, index);
      const next = reserve.slice(index + 1);
      reserve = [...prev, ...next];
      continue;
    }
    student[x] = false;
    count++;
    //         false 인 숫자 count
  }

  reserve.sort((a, b) => a - b);

  for (let x of reserve) {
    if (x !== 1 && !student[x - 1]) {
      student[x - 1] = true;
      count--;
      continue;
    }
    if (x === n) continue;

    if (student[x + 1]) continue;

    student[x + 1] = true;
    count--;
  }

  answer = n - count;
  return answer;
}
