const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

number=input[0].split(" ");

let X=Number(number[0]);
let Y=Number(number[1]);
let Z= parseInt((Y*100/X));
// Z=승패


function winner(n){
  // n판 만큼 더 하면 Z가 변하는가
  let answer=parseInt(((Y+n)*100/(X+n)));
  if(answer===Z) return false;
  else return true;
}

let left=1,right= 1000000000;
let answer=0;
while(left<=right){
  let mid=parseInt((left+right)/2);
  if(winner(mid)){
    answer=mid;
    right=mid-1;
  }
  else left=mid+1;
}

if (answer===0) console.log("-1");
else console.log(answer);