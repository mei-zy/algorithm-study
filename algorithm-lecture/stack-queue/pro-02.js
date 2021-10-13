function solution(string){
  let stack=[];
  for(let x of string){
    if(x===')'){
      while(stack.pop()!=='(');
    }
    else stack.push(x);
  }
  let answer=stack.join('');

  return answer;
}
console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));

