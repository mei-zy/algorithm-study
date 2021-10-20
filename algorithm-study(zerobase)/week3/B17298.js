// <----- 입력 예제---->
// 4
// 3 5 2 7
// <----------------->

let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./input.txt").toString().split("\n");
let n = Number(input[0].split(" "));
let nums = input[1].split(" ");

// nums를 int화 시키는 작업
for(let i=0;i<nums.length;i++) nums[i]=Number(nums[i]);
;
// <------ 풀이 시작----->
let stack=[];

let answer=new Array(nums.length).fill(-1);

for(let i=0;i<nums.length;i++){
  if(stack.length !=0 && nums[stack[stack.length-1]] < nums[i] ){
    while(nums[stack[stack.length-1]]<nums[i]){
      let x=stack.pop();
      answer[x]=nums[i];
    }
  }
  stack.push(i);
}

console.log(answer.join(' '));