function solution(n) {
  var ans = 0;
  const visited = Array(n).fill(Infinity);

  const dfs = (sum, location) => {
    if (location > n) return;
    if (location === n) {
      console.log("sum", sum);
      return sum;
    }

    console.log("location", location);
    console.log("sum", sum);

    if (visited[sum] <= sum) return;
    else visited[sum] = sum;

    // k칸 앞으로
    dfs(sum + 1, location + 1);
    dfs(sum, location * 2);
  };

  const result = dfs(0, 0);
  console.log(visited);

  console.log(result);
  return ans;
}

console.log(solution(5));
