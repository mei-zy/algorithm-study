let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");

let numbers = [];
split2 = input[0].split(" ");

// K : 가지고 있는 랜선의 개수, N= 필요한 랜선의 개수
let K = parseInt(split2[0]);
let N = parseInt(split2[1]);

for (let i = 1; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

// <---------코드 시작---------->
for (let i = 0; i < K; i++) numbers[i] = Number(numbers[i]);
numbers.sort((a, b) => a - b);
let max = Math.max(...numbers);
let left = 1,
  right = max;

function Maxlen(mid) {
  let count = 0;
  for(let x of numbers) count+= parseInt(x/mid);
  return count;
}
let answer;
while (left <= right) {
  mid = parseInt((left + right) / 2);
  // console.log("mid : " + mid);
  if (Maxlen(mid) >= N) {
    answer=mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);