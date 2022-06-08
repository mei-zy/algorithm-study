const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = inputs[0].split(" ").map(Number);
const timeTable = [];

for (let i = 0; i < n; i++) {
  const time = +inputs[i + 1];
  timeTable.push(time);
}

timeTable.sort((a, b) => a - b);

let left = 0,
  right = m * timeTable[timeTable.length - 1];
let answer;

while (left <= right) {
  let mid = parseInt((left + right) / 2);
  let people = 0;

  for (let time of timeTable) {
    people += parseInt(mid / time);
  }

  if (people >= m) {
    right = mid - 1;
  } else {
    answer = mid;
    left = mid + 1;
  }
}
console.log(left);
