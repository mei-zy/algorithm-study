function solution(s) {
  var answer = 0;

  const hashM = new Map();
  const hashS = new Set();

  for (let word of s) hashM.set(word, (hashM.get(word) || 0) + 1);

  for (let [word, num] of hashM) {
    while (hashS.has(num)) {
      num--;
      ++answer;
    }
    if (num >= 0) hashS.add(num);
  }
  return answer;
}

console.log(solution("aaabcc"));
