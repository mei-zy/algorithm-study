const pathDirection = {
  W: {
    N: "right",
    S: "left",
  },
  S: {
    E: "left",
    W: "right",
  },
  N: {
    W: "right",
    E: "left",
  },
  E: {
    N: "left",
    S: "right",
  },
};
function solution(path) {
  let answer = [];

  let time = 0;
  let move = 100;

  for (let i = 1; i < path.length; i++) {
    if (path[i - 1] !== path[i]) {
      const direction = pathDirection[path[i - 1]][path[i]];

      if (move >= 500) {
        const need = (move - 500) / 100;
        time += need;
        move -= need * 100;
      }

      answer.push(`Time ${time}: Go straight ${move}m and turn ${direction}`);

      move = 100;
      time = i;
    } else {
      move += 100;
    }
  }
  return answer;
}

console.log(solution("EEESEEEEEENNNN"));
console.log(solution("SSSSSSWWWNNNNNN"));
