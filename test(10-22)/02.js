function solution(queue1, queue2) {
  var answer = -1;

  const len = queue1.length;

  const calSum = (sum, currValue) => {
    return sum + currValue;
  };

  let q1Sum = queue1.reduce(calSum, 0);
  let q2Sum = queue2.reduce(calSum, 0);
  let need = parseInt((q1Sum + q2Sum) / 2);

  if ((q1Sum + q2Sum) % 2 !== 0) return -1;

  let cnt = 0;

  let left = 0;
  let right = 0;
  let sum = queue2[left];
  let index = 0;

  while (left <= right) {
    console.log("left", left, "right", right, "sum", sum);
    if (sum === need) break;

    if (sum < need) {
      if (right >= queue2.length - 1) {
        sum += queue1[index++];
        cnt++;
      } else {
        right++;
        sum += queue2[right];
      }
    } else {
      sum -= queue2[left];
      left++;
      cnt++;
    }
  }
  console.log(cnt);

  return answer;
}
console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
// console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
// console.log(solution([1, 2, 1, 2], [1, 2, 1, 2]));
// console.log(solution([10000000000, 10000000000, 9999999999], [1, 10000000000]));
// console.log(solution([1, 1], [1, 5]));
// console.log(1000000000 + 10000000001);
