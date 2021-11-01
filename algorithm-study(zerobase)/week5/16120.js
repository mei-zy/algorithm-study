const { log } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let string=input[0];
// 입력 : ppap

let stack=[];
let flag=true;

let cnt=0;

for(let i=0;i<string.length;i++){
  if(string[i]==='P'){
    cnt++;
    continue;
  }
  if(cnt>=2 && string[i+1] === 'P'){
    cnt--;
    i++;
  }
  else{
    console.log("NP");
    return;
  }
}
if(cnt===1) console.log("PPAP");
else console.log("NP");

