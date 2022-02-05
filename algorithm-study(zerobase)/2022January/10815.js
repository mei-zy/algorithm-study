const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const cards = inputs[1].split(" ").map(Number);
const checked = inputs[3].split(" ").map(Number);

cards.sort((a, b) => a - b);
let answer = [];

for (let i = 0; i < checked.length; i++) {
  let flag = 0;
  let left = 0,
    right = cards.length;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (cards[mid] === checked[i]) {
      flag = 1;
      break;
    } else if (cards[mid] > checked[i]) right = mid - 1;
    else left = mid + 1;
  }
  answer.push(flag);
}

console.log(answer.join(" "));
