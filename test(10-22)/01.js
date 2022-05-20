const personality = {
  RT: {
    R: 0,
    T: 0,
  },
  CF: {
    C: 0,
    F: 0,
  },
  JM: {
    J: 0,
    M: 0,
  },
  AN: {
    A: 0,
    N: 0,
  },
};

function solution(survey, choices) {
  let answer = "";

  let score = [Infinity, 3, 2, 1, 0, 1, 2, 3];

  let index = 0;
  for (let type of survey) {
    const [a, b] = type.split("");
    const findIndex = type.split("").sort().join("");
    const scoreIndex = choices[index++];

    if (scoreIndex === 4) {
      continue;
    } else if (scoreIndex >= 5) {
      personality[findIndex][b] += score[scoreIndex];
    } else {
      personality[findIndex][a] += score[scoreIndex];
    }
  }

  // console.log(personality);
  for (let typeIndex of Object.values(personality)) {
    const [aKey, bKey] = Object.keys(typeIndex);
    const [a, b] = Object.values(typeIndex);

    if (a >= b) {
      answer += aKey;
    } else answer += bKey;
  }

  return answer;
}

// console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));
