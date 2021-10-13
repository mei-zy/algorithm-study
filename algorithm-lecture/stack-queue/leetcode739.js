// function solution(nums){
//   let n=nums.length;
//   let answer=new Array(n).fill(0);
//   let stack=[];

//   for(let i=0;i<n;i++){
//     while(stack.length&&nums[i]>nums[stack[stack.length-1]]){
//       answer[stack[stack.length-1]]=i-stack[stack.length-1];
//       stack.pop();
//     }
//     stack.push(i);
//   }
//   return answer;
// }
// console.log(solution([73,74,75,71,69,72,76,73]))

function solution(temperatures){
  let stack=[];
  let answer=new Array(temperatures.length).fill(0);
  
  for(let i=0;i<temperatures.length;i++){
      while(stack!==0 && temperatures[i]>temperatures[stack[stack.length-1]]){
          // console.log(temperatures[stack[stack.length-1]]);
          // console.log(i+": i값 "+stack[stack.length-1]);
          answer[stack[stack.length-1]]=i-stack[stack.length-1];
          stack.pop();
      }
      stack.push(i);
  }
  return answer;  
};

console.log(solution([73,74,75,71,69,72,76,73]));