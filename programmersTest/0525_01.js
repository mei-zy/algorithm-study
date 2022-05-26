function solution(call) {
  var answer = "";

  const map = new Map();
  const len = call.length;
  let temp = call.toLowerCase();

  for (let i = 0; i <= parseInt(len / 2); i++) {
    for (let j = 0; j < len - i; j++) {
      const word = temp.slice(j, i + j + 1);
      map.set(word, (map.get(word) || 0) + 1);
    }
  }

  const delArr = [...map.entries()].sort((a, b) =>
    b[1] === a[1] ? b[0].length - a[0].length : b[1] - a[1]
  );

  const max = delArr[0][1];
  for (let i = 0; i < delArr.length; i++) {
    const [w, c] = delArr[i];

    if (c !== max) break;

    const reg = new RegExp(w, "g");
    const replaceWord = "`".repeat(w.length);
    temp = temp.replace(reg, replaceWord);
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "`") continue;
    answer += call[i];
  }
  return answer;
}
console.log(solution("dkgjkAGSGSDDGdkgkjkADGDDASDDAAADDAAA"));
console.log(solution("jdjlkgjkAGDADDAGHFSDSDDGdkjklgjlkjagjekjdkljocamlkgjk"));
// console.log(solution("abxdeydeabz"));
// console.log(solution("abcabca"));
// console.log(solution("ABCabcA"));
