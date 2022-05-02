function solution(sentence, keyword, skips) {
  var answer = "";

  const n = sentence.length;
  const m = keyword.length;
  const k = skips.length;
  let answer = "";
  let ix = 0;

  for (let i = 0; i < k; i++) {
    const insert = keyword[i % m];
    const overflowed = false;

    for (let j = 0; j < skips[i]; j++) {
      if (ix >= n) {
        overflowed = true;
        break;
      }

      const fromSentence = sentence[ix];
      answer += fromSentence;
      ix++;

      if (fromSentence === insert) {
        break;
      }
    }
    if (overflowed) break;
    answer += insert;
  }
  for (let i = ix; i < n; i++) {
    answer += sentence[i];
  }

  return answer;
}

console.log(solution("i love coding", "mode", [0, 10]));
