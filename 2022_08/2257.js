const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim();

console.log(input);

const score = {
  H: 1,
  C: 12,
  O: 16,
};

const checkNumber = (i) => {
  const num = +i;

  if (num >= 0 && num <= 9) return true;

  return false;
};

const solution = () => {
  let answer = 0;
  let i = 0;
  let current = 0;

  while (true) {
    if (i === input.length) break;

    if (input[i] === "(") {
      answer += current;
      current = 0;
    } else if (input[i] === ")") {
      if (i < input.length - 1 && checkNumber(input[i + 1])) {
        current *= +input[i + 1];
      }

      answer += current;
      current = 0;
    } else {
      if (i < input.length - 1 && checkNumber(input[i + 1])) {
        current += score[input[i]] * +input[i + 1];
      } else {
        if (!checkNumber(input[i])) {
          current += score[input[i]];
        }
      }
    }
    console.log(
      "word ",
      input[i],
      "current   : ",
      current,
      "answer   :",
      answer
    );
    i++;
  }

  return answer;
};

console.log(solution());
