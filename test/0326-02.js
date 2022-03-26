function solution(sentences, n) {
  let answer = 0;

  const hashSet = new Map();

  const regCapital = /[A-Z]/g;
  const regSpace = /\s/g;

  for (let i = 0; i < sentences.length; i++) {
    for (let j = 0; j < sentences[i].length; j++) {
      if (regSpace.test(sentences[i][j])) {
        // hashSet.set("space", (hashSet.get("space") || 0) + 1);
        continue;
      }
      if (regCapital.test(sentences[i][j])) {
        hashSet.set("shift", (hashSet.get("shift") || 0) + 1);
      }

      const toLower = sentences[i][j].toLowerCase();
      hashSet.set(toLower, (hashSet.get(toLower) || 0) + 1);
    }
  }

  const sortingHash = [...hashSet.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, n);
  let availableKey = [];

  for (let i = 0; i < sortingHash.length; i++) {
    availableKey.push(sortingHash[i][0]);
  }

  // 뽑은 key 로 word 만들 수 있는지 체크
  for (let i = 0; i < sentences.length; i++) {
    let score = 0;

    for (let j = 0; j < sentences[i].length; j++) {
      if (regCapital.test(sentences[i][j])) {
        if (!availableKey.includes("shift")) {
          console.log("shift");
          score = 0;
          break;
        }
        score++;
      }

      if (regSpace.test(sentences[i][j])) {
        score++;
        continue;
      }
      const lower = sentences[i][j].toLowerCase();
      if (!availableKey.includes(lower)) {
        score = 0;
      }
      score++;
    }
    answer += score;
  }

  return answer;
}

console.log(solution(["line in line", "LINE", "in lion"], 5));
console.log(solution(["ABcD", "bdbc", "a", "Line neWs"], 7));
