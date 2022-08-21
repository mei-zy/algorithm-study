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
  let stack = [];

  while (true) {
    if (i === input.length) break;

    if (input[i] === "(") {
      stack.push("(");
    } else if (input[i] === ")") {
      let sum = 0;
      while (stack.length) {
        const x = stack.pop();
        if (x === "(") {
          // 계산하고 break
          stack.push(sum);
          break;
        }
        sum += x;
      }
    } else {
      if (checkNumber(input[i])) {
        const x = stack.pop();
        stack.push(x * +input[i]);
      } else {
        stack.push(score[input[i]]);
      }
    }

    i++;
  }

  while (stack.length) {
    answer += stack.pop();
  }
  // answer = stack[stack.length - 1];
  return answer;
};

console.log(solution());
