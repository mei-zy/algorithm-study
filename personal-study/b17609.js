// https://www.acmicpc.net/problem/17609

let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./input.txt").toString().split("\n");
// <---- input 예제  ---->
// 7
// abba
// summuus
// xabba
// xabbay
// comcom
// comwwmoc
// comwwtmoc
// <------------------->
let n=Number(input.shift());

function solution(string){
  let left=0, right=string.length-1;
  while(left<=right){
    // console.log(string[left], string[right]);
    if(string[left]!==string[right]){
      let s1=string.substring(left+1,right+1);
      let s2=string.substring(left,right);
      if(s1 === s1.split('').reverse().join('') || s2 === s2.split('').reverse().join('')) return 1;
      else return 2;
    }
    left++;
    right--;
  }
  return 0;
}

for(let i=0;i<n;i++){
  string=input[i].trim(); 
  console.log(solution(string));
}
