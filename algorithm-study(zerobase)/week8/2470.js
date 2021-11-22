// 5
// -2 4 -99 -1 98

const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

let n = Number(inputs[0]);
let solution = inputs[1].split(" ").map(Number);
// 1. 정렬하기
solution.sort((a, b) => a - b);
// console.log(solution);
let min = Number.MAX_SAFE_INTEGER;
let answer = [];

let left = 0;
let right = n - 1;
while (left < right) {
  let tmp = solution[left] + solution[right];
  if (min > Math.abs(0 - tmp)) {
    min = Math.abs(0 - tmp);
    answer = [solution[left], solution[right]];
  }
  if (tmp > 0) {
    // 뺀 값이 0보다 크면 right를 앞으로
    right--;
  } else {
    left++;
  }
}

console.log(answer.join(" "));
