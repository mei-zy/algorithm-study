const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const S = input[0].split("");
const T = input[1].split("");
// console.log(S, T);

let answer = 0;
const sameString = (str1, str2) => {
  return str1.join("") === str2.join("") ? true : false;
};
while (true) {
  if (S.length === T.length) {
    if (sameString(S, T)) {
      answer = 1;
      break;
    }
  }
  if (T[T.length - 1] === "A") {
    T.pop();
  } else {
    T.pop();
    T.reverse();
  }
}

console.log(answer);
