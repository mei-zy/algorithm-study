function solution(n, words) {
  var answer = [];

  const set = new Set();
  let lastWord = words[0][0];
  let curNum = 1;
  let time = Array(n).fill(1);
  let flag = false;

  for (let i = 0; i < words.length; i++) {
    if (set.has(words[i])) {
      flag = true;
      break;
    }

    const first = words[i][0];
    const last = words[i][words[i].length - 1];

    if (first !== lastWord) {
      flag = true;
      break;
    }

    set.add(words[i]);

    lastWord = last;
    time[curNum - 1]++;
    curNum++;
    if (curNum > n) curNum = 1;
    console.log(curNum, words[i]);
  }

  if (!flag) return [0, 0];

  answer = [curNum, time[curNum - 1]];
  return answer;
}
console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
