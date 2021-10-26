let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./input.txt").toString().split("\n");

// <--- 입력 예제--->
// 5
// 4 1 5 2 3
// 5
// 1 3 7 9 5
// ----------------

let N=Number(input[0]);
let A=input[1].split(' ');
for(let i=0;i<N;i++) A[i]=Number(A[i]);
// A 배열 정수화
let Xnum=Number(input[2])
let X=input[3].split(' ');

A.sort((a,b)=>a-b);
// 정렬해주기
function BinarySearch(n,left,right){
  while(left<=right){
    let mid=parseInt((left+right)/2);
    if(A[mid]===n) return true;
    
    if(A[mid]>n) right=mid-1;
    else if(A[mid]<n) left=mid+1;
  
  }
  return false;
}
let answer=[];
for(let i=0;i<Xnum;i++){
  X[i]=Number(X[i]);
  let left=0;right=N-1;
  if(BinarySearch(X[i],left,right)) answer[i]=1;
  else answer[i]=0;
}


for(let x=0;x<Xnum;x++) console.log(answer[x]);