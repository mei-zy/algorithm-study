const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let note = input[1].split(" ").map(Number);
let reset = new Array(n).fill(0);

let cnt = 0;
for (let i = 0; i < n; i++) {
  if (reset[i] === note[i]) continue;

  for (let j = i; j < i + 3; j++) {
    // 자기 포함해서 오른쪽 2개까지 변경 가능
    if (j === reset.length) break;
    if (reset[j] === 0) reset[j] = 1;
    else reset[j] = 0;
  }
  cnt++;
}
console.log(cnt);
