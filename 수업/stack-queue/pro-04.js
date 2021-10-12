function solution(string){
  let stack=[];
  for(let x of string){
    if(stack.length>=1){
      let i=stack.pop()
      if(i!==x){
        // 일치하지 않는다면 뺐던 것을 다시 넣어주고, 현재 값도 push
        stack.push(i);
        stack.push(x);
      }
    }
    else stack.push(x);
  }
  let answer=stack.join('');
  return answer;
}
console.log(solution("acbbcaa"));
console.log(solution("bacccaba"));