function solution(n,m){
  let answer=[];
  let tmp=[];
  function DFS(L){
    if(L===m) {
      answer.push(tmp.slice());
      // slice를 이용해서 깊은 복사를 해주어야 한다. 
    }
    else{
      // n==3 이면 3번 돌아야한다.
      for(let i=1;i<=n;i++){
        tmp.push(i);
        DFS(L+1);
        tmp.pop();
      }
    }
  }
  DFS(0);
  return answer;
}
console.log(solution(3,2));