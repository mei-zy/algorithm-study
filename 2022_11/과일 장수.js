function solution(k, m, score) {
  var answer = 0;

  const rest = Math.floor(score.length / m);

  score.sort((a, b) => b - a);
  let p = 1;
  for (let i = m; i - 1 < score.length; i = m * p) {
    answer += score[i - 1] * m;

    p++;
  }
  return answer;
}
