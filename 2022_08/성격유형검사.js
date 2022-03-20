const personality = {
  R: 0,
  T: 0,
  C: 0,
  F: 0,
  J: 0,
  M: 0,
  A: 0,
  N: 0,
};

function solution(survey, choices) {
  var answer = "";
  const len = survey.length;

  for (let i = 0; i < len; i++) {
    const [front, back] = survey[i].split("");

    if (choices[i] === 4) continue;

    switch (choices[i]) {
      case 1:
        personality[front] += 3;
        break;
      case 2:
        personality[front] += 2;
        break;
      case 3:
        personality[front] += 1;
        break;
      case 5:
        personality[back] += 1;
        break;
      case 6:
        personality[back] += 2;
        break;
      case 7:
        personality[back] += 3;
        break;
    }
  }

  if (personality["R"] >= personality["T"]) {
    answer += "R";
  } else answer += "T";

  if (personality["C"] >= personality["F"]) {
    answer += "C";
  } else answer += "F";

  if (personality["J"] >= personality["M"]) {
    answer += "J";
  } else answer += "M";

  if (personality["A"] >= personality["N"]) {
    answer += "A";
  } else answer += "N";

  return answer;
}

// console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));
