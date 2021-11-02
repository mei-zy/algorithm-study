const { log } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let splited=input[0].split(' ');

// <------코드 시작 ----->
let M=Number(splited[0]);
let N=Number(splited[1]);
let blulay=input[1].split(' ').map(Number);

let rightsum=0;
for(let i=0;i<M;i++) {
  blulay[i]=Number(blulay[i]);
  rightsum+=blulay[i];
}

let left=1, right=rightsum;
function blulayMid(mid){
  let cnt=1;
  let sum=0;
  for(let x of blulay){
    if((sum+x)>mid){
      // 새로운 블루레이에 저장
      sum=x;
      cnt++;
    }
    else sum+=x;
  }
  return cnt;
}
let answer;
while(left<=right){
  let mid=parseInt((left+right)/2);
  if(blulayMid(mid)<=N){
    answer=mid;
    right=mid-1;
  }
  else left=mid+1;
}

console.log(answer);