const solution = (n) => {
  const meal = [1, 2, 4, 6];
  // const dp = Array.from(Array(n + 1);
  const dp = Array(n + 1).fill(0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    for (let j = 0; j < meal.length; j++) {
      if (meal[j] > i) break;
      else if (meal[j] === i) dp[i] += 1;
      else {
        const x = i - meal[j];
        dp[i] += dp[x];
      }
    }
  }

  console.log(dp[n] % 1000000007);
};

console.log(solution(1000));
