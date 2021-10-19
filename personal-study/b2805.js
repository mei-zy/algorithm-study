let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./input.txt").toString().split("\n");

split2 = input[0].split(" ");

let M = parseInt(split2[1]);
tree = input[1].split(" ");
// M : 집에 가지고 가야하는 나무의 길이
// tree : 가지고 있는 나무의 배열

// <-------풀이 시작----------->

let max = 2000000000;
let left = 0,
  right = max;

let answer;
while (left <= right) {
  let mid = parseInt((left + right) / 2);
  let cutsum=0;
  for (let x of tree) {
    if (x > mid) cutsum += x - mid;
  }
  if (cutsum < M) right = mid - 1;
  else {
    answer = mid;
    left = mid + 1;
  }
}


console.log(answer);
