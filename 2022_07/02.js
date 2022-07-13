const solution = (n, string) => {
  let answer = "";
  const newNumber = {
    qw: 1,
    as: 2,
    zx: 3,
    we: 4,
    sd: 5,
    xc: 6,
    er: 7,
    df: 8,
    cv: 9,
    ze: 0,
  };

  for (let i = 0; i < string.length - 1; i++) {
    const tmp = string.slice(i, i + 2);
    console.log(tmp);
    if (newNumber[tmp] === undefined) continue;
    answer += newNumber[tmp];
  }

  return answer;
};

// console.log(solution(4, "qwer"));
// console.log(solution(10, "sdweasweas"));
console.log(solution(6, "qwerzer"));
