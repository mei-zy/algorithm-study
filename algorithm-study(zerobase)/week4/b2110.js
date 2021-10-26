// <---입력 예제--->
// 5 3
// 1
// 2
// 8
// 4
// 9
// <------------->

let fs = require("fs");
//let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let numbers = [];
split2 = input[0].split(" ");

// N : 집의 개수 C : 공유기의 개수
let N = parseInt(split2[0]);
let C = parseInt(split2[1]);

let house=[]
for(let i=0;i<N;i++) house.push(Number(input[i+1]));

house.sort((a,b)=>a-b);
// 집들이 있는 위치 sort해준다.

function isOk(len){
  let cnt=1, last=house[0];
  for(let i=1;i<N;i++){
    // A[i]에 설치가 가능한가
    if((house[i]-last)>=len){
      cnt++;
      last=house[i];
    }
  }
  return cnt>=C;
}
let answer;
let left=0,right=1000000000;
while(left<=right){
  let mid=parseInt((left+right)/2);
  if(isOk(mid)) {
    answer=mid;
    left=mid+1;
  }
  else right=mid-1;
}

console.log(answer);