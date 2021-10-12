function solution(student){
  let stack=[];
  let answer=new Array(student.length).fill(0)
  for(let i=student.length-1;i>=0;i--){
    while(stack.length>0 && student[i]>student[stack[stack.length-1]]){
      answer[stack[stack.length-1]]=i+1;
      stack.pop();
    }
    stack.push(i);
  }
  return answer;
}
console.log(solution([50,46,55,76,65,50,55,53,55,50]));