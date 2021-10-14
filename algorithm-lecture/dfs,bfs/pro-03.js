function solution(v){
  let answer=[];
  let tmp=[];
  function DFS(n){
    if(n===v+1){ answer.push(tmp.slice());}
    else{
      tmp.push(n);
      // 1. 사용하겠다
      DFS(n+1);
      tmp.pop();
      DFS(n+1);
      // 사용하지 않겠다.
    }

  }
  DFS(1);
  return answer;

}
console.log(solution(3));