function solution(n, r) {
  let dy = Array.from(Array(35), () => Array(35).fill(0));
  let answer = [];
  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[r][n] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
}
console.log(solution(30, 15));
