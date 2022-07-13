const solution = (n, string) => {
  let answer = "";
  const AsciiZ = "z".charCodeAt(0);

  for (let i = 0; i < n; i++) {
    const beforeAscii = string[i].charCodeAt(0);
    let afterAscii = beforeAscii + i + 1;

    if (afterAscii > AsciiZ) {
      // 크다면 a로 돌려주어야한다.
      afterAscii -= 26 * (parseInt((afterAscii - AsciiZ - 1) / 26) + 1);
    }

    if (afterAscii <= beforeAscii) continue;

    answer += String.fromCharCode(afterAscii);
  }
  console.log(answer);
  console.log(answer.length);
};

console.log(solution(5, "abcde"));
// console.log(solution(5, "wwwww"));
// console.log(solution(5, "wayuz"));
// console.log(solution(10, "bybvsrlkcd"));
console.log(
  solution(
    100,
    "mkfjaivdwlrbmgjwaokwiysiaatttekzpwluexnuhxfarafistcprdrdczbunuoiuvzcdclgdpfagdfktspjgqmwfnmalmgrhvyj"
  )
);

console.log(180 - 26 * (parseInt((180 - 122 - 1) / 26) + 1));
