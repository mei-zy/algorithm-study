const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const money = Array(n);
for (let i = 0; i < n; i++) money[i] = input[i + 1];

const findDrawCount = (mid) => {
  let cnt = 0;
  let remain = 0;
  for (let i = 0; i < n; i++) {
    if (remain < money[i]) {
      cnt++;
      remain = mid - money[i];
    } else remain -= money[i];
  }
  return cnt++;
};
let answer;
let left = Math.max(...money);
let right = 1000000;
while (left <= right) {
  let mid = parseInt((left + right) / 2);
  if (findDrawCount(mid) > m) left = mid + 1;
  else {
    answer = mid;
    right = mid - 1;
  }
}
console.log(answer);
