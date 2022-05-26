function solution(s) {
  var answer = 0;

  const map = new Map();
  const len = s.length;

  for (let i = 1; i <= parseInt(len / 2); i++) {
    for (let j = 0; j < len - i; j++) {
      const word = s.slice(j, i + j + 1);
      map.set(word, (map.get(word) || 0) + 1);
    }
  }

  const delArr = [...map.entries()].sort((a, b) =>
    b[1] === a[1] ? b[0].length - a[0].length : b[1] - a[1]
  );

  console.log(delArr);

  if (delArr[0][1] === 1) return 0;

  return delArr[0][0].length;
}

// console.log(solution("aabcaabdaab"));
// console.log(solution("dkgjkAGSGSDDGdkgkjkADGDDASDDAAADDAAA"));
console.log(solution("aaaaa"));
