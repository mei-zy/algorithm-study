function solution(string){
  let stack=[];
  let answer="YES";
  for(let i=0;i<string.length;i++){
    if(string[i]==='(') stack.push('(');
    if(string[i]===')') stack.pop();
  }
  if(stack.length!==0) answer="NO";
  return answer;
}
console.log(solution("(()(()))(()"));
console.log(solution("()()()"));