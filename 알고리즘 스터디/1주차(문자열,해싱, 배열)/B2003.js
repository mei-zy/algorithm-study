const { SlowBuffer } = require("buffer");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// input 테스트
let split=input[0].split(" ");
// console.log(split);
// // console.log(input[0]);
// console.log("1: "+input[1]);
// array 생성
let array=new Array(split[0]);
array=input[1].split(" ");
let m=parseInt(split[1]);

let left=0,
    sum=0,
    count=0;

for(let right=0;right<array.length;right++){
    sum+=parseInt(array[right]);
    while(sum>m){
        sum-=parseInt(array[left]);
        left++;
    }
    if(sum==m) count++;
}
console.log(count);
