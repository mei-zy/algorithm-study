const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [l, c] = inputs[0].split(" ").map(Number);
const words = inputs[1].split(" ");

words.sort();
let answer = [];
let temp = "";

const check = (str) => {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      sum++;
    }
  }
  return sum;
};

const DFS = (curr, L) => {
  if (L === l) {
    const vowelcount = check(temp);
    const consonantscount = temp.length - vowelcount;

    if (vowelcount >= 1 && consonantscount >= 2) {
      answer.push(temp);
    }
    return;
  }

  for (let i = curr; i < c; i++) {
    temp += words[i];
    DFS(i + 1, L + 1);
    temp = temp.slice(0, temp.length - 1);
  }
};
DFS(0, 0);
console.log(answer.join("\n"));
