function solution(call) {
  let answer = "";

  let sentence = call.toLowerCase();
  const half = parseInt(sentence.length / 2);
  const map = new Map();

  let sliceNum = 0;
  let maxNum = 0;

  while (sliceNum <= half) {
    for (let i = 0; i < sentence.length - sliceNum; i++) {
      const sliceSentence = sentence.slice(i, i + 1 + sliceNum);

      map.set(sliceSentence, (map.get(sliceSentence) || 0) + 1);
    }

    sliceNum++;
  }

  const sorting = [...map];
  sorting.sort((a, b) => b[1] - a[1]);

  for (let [key, value] of sorting) {
    if (value >= maxNum) {
      const reg = new RegExp(key, "g");

      sentence = sentence.replace(reg, "#");
      maxNum = value;
    } else break;
  }

  const temp = sentence.split("");

  temp.forEach((element, num) => {
    if (element !== "#") answer += call[num];
  });

  return answer;
}
