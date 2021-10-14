// 전위순회, 중위순회, 후위순회

function solution(){
  let answer="";
  function DFS(L){
    if(L>7) return answer;
    else{
      DFS(2*L);
      DFS(2*L+1);
      answer+=L+" ";
      // 후위연산
    }
  }
  DFS(1);
  return answer;
}
console.log(solution());