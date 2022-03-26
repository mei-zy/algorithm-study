function solution(paper) {
  let answer = 0;

  paper.sort((a, b) => b - a);

  let currentSum = 0;

  for (let i = 0; i < paper.length; i++) {
    currentSum += paper[i];

    const squared = (i + 1) ** 2;

    if (squared <= currentSum) {
      answer = Math.max(answer, i + 1);
    }
  }
  return answer;
}

console.log(solution([1, 0, 0, 3, 0, 1]));
console.log("-------------");
console.log(solution([7, 5, 8, 10, 6, 9, 5]));
