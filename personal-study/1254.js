const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let string = String(input);

let left = 0,
  right = string.length - 1;

let tmp = [];
let flag = false;
while (left <= right) {
  if (left !== 0 && right !== string.length) {
    if (string[left] !== string[right]) {
      flag = true;
      break;
    }
  }

  if (string[left] !== string[right]) {
    tmp.unshift(string[left]);
    left++;
  } else {
    left++;
    right--;
  }
}

if (flag) {
  string += string
    .slice(0, string.length - 1)
    .split("")
    .reverse()
    .join("");
} else {
  string += tmp.join("");
}
console.log(string.length);
