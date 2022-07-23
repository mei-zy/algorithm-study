const solution = (q1, q2) => {
  let answer = -1;

  let left1 = 0,
    left2 = 0,
    right1 = q1.length - 1,
    right2 = q2.length - 1,
    q1Sum = 0,
    q2Sum = 0;

  for (let x of q1) q1Sum += x;
  for (let x of q2) q2Sum += x;

  while (left1 <= right1 && left2 <= right2) {
    console.log("left1", left1, "sum", q1Sum);
    console.log("left2", left2, "sum", q2Sum);
    console.log("=====");

    if (q1Sum === q2Sum) break;
    else if (q1Sum < q2Sum) {
      // q2 sum 이 큰경우
      const target = q2[left2++];
      q2Sum -= target;
      q1Sum += target;
    } else {
      const target = q1[left1++];
      q1Sum -= target;
      q2Sum += target;
    }
    answer++;
  }

  return answer;
};

// console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); //2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); //7
// console.log(solution([1, 1], [1, 5])); //-1
