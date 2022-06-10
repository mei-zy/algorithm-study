const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let index = 0;

while (inputs[index] !== "0") {
  let left = 0;
  let right = inputs[index].length - 1;
  let flag = true;

  while (left < right) {
    if (inputs[index][left] === inputs[index][right]) {
      left++;
      right--;
    } else {
      flag = false;
      break;
    }
  }
  index++;
  if (flag) console.log("yes");
  else console.log("no");
}
