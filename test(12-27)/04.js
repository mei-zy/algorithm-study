function solution(nums) {
  var answer = 0;

  let minarr = new Array(nums.length).fill(0);

  let min = Number.MAX_SAFE_INTEGER;
  for (let i = nums.length - 1; i >= 0; i--) {
    min = Math.min(nums[i], min);
    minarr[i] = min;
  }
  let left_len = 0;
  let max = Number.MIN_SAFE_INTEGER;
  console.log(minarr);
  for (let j = 0; j < nums.length - 1; j++) {
    max = Math.max(max, nums[j]);
    if (max <= minarr[j + 1]) break;
    left_len++;
  }
  // console.log(left_len + 1);
  answer = left_len + 1;
  return answer;
}

console.log(solution([1, 1, 1, 0, 6, 12]));
