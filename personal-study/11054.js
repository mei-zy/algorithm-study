const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input.shift());
const numbers = input.shift().split(' ').map(Number);

let dpFront = new Array(n).fill(1);
let dpBack = new Array(n).fill(1);

// 정방향으로 이동
for (let i = 0; i < n; i++) {
  let max = 0;
  for (let j = i; j >= 0; j--) {
    numbers[i] > numbers[j] ? (max = Math.max(max, dpFront[j])) : false;
  }
  dpFront[i] = max + 1;
  // maxall_f = Math.max(maxall_f, max + 1);
}

for (let i = n - 1; i >= 0; i--) {
  let max = 0;
  for (let j = i; j < n; j++) {
    numbers[i] > numbers[j] ? (max = Math.max(max, dpBack[j])) : false;
  }
  dpBack[i] = max + 1;
}

console.log(Math.max(...dpFront.map((incVal, index) => incVal + dpBack[index])) - 1);
