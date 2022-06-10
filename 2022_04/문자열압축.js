function solution(s) {
  var answer = 0;

  const len = s.length;
  let pivot = parseInt(s.length / 2);

  while (pivot >= 1) {
    for (let i = 0; i < len - pivot; i++) {
      let count = 0;
      const base = s.slice(i, i + pivot);
      console.log("========base==========", base);
      for (let j = i + 1; j < len; j++) {
        console.log("i :", i, "pivot :", pivot, "slice :", pivot + i + pivot);
        const compare = s.slice(j, j + pivot);

        if (compare.length < pivot) break;
        if (base !== compare) break;
        count++;
      }
      const reg = new RegExp(base, "g");

      if (count > 1) {
        s = s.replace(reg, "#");
        s = s.replace(/[#]/g, `${count}${base}`);
      }
    }
    pivot--;
  }
  console.log(s);
  return answer;
}

console.log(solution("aabbaccc"));
