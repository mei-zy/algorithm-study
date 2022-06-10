const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const arr = inputs[1].split(" ").map(Number);

let [l, r] = [0, arr.length - 1];
let curr_min = Math.abs(arr[l] + arr[r]);
let answer = [];

while (l < r) {
  let mid = arr[r] + arr[l];

  if (curr_min >= Math.abs(mid)) {
    curr_min = Math.abs(mid);
    answer = [arr[l], arr[r]];
  }

  if (mid < 0) {
    l++;
  } else r--;
}
console.log(answer.join(" "));
