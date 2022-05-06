function solution(n, nums) {
  var answer = 0;

  let len = nums.length;
  nums.unshift(0);
  nums.push(n);

  const dy = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  for (let i = 2; i <= len + 1; i++) {
    for (let j = 0; j <= len + 1 - i; j++) {
      let min = Number.MAX_SAFE_INTEGER;

      for (let k = j + 1; k <= i + j - 1; k++) {
        if (dy[j][k] + dy[k][i + j] + nums[i + j] - nums[j] < min) {
          min = dy[j][k] + dy[k][i + j] + nums[i + j] - nums[j];
        }
      }
      dy[j][i + j] = min;
    }
  }
  return dy[0][len + 1];
}
