const { cp } = require("fs");

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const n = Number(input[0]);
console.log(n);

let start = Number.MAX_SAFE_INTEGER;
let end = Number.MIN_SAFE_INTEGER;
let total = 0;
let arr = new Array();

for (let i = 0; i < n; i++) {
  let [news, newe] = input[1 + i].split(" ").map(Number);
  arr.push([news, newe]);
}

// 2. 정렬
arr.sort((a, b) => a[0] - b[0]);
// console.log(arr);

for (let i = 0; i < n; i++) {
  let inputS = arr[i][0];
  let inputE = arr[i][1];
  flag = true;

  if (inputS < start) start = inputS;
  else if (inputS > end) {
    total += end - start;
    start = inputS;
    end = inputE;
  }
  if (inputE > end) end = inputE;
}
total += end - start;

console.log(total);
