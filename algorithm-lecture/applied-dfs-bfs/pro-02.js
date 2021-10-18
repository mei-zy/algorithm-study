function solution(n, arr){
  let graph=new Array(n+1);
  for(let i=1;i<=n+1;i++) graph[i]=new Array();
  // 2차원 배열 생성
  for(let [a,b] of arr)
    graph[a].push(b);
    
  let answer=0;
  let answer2=[];
  let path=[];
  let ch=new Array(n+1).fill(0);
  function DFS(L){
    if(L===n){
      answer++;
      answer2.push(path.slice());
    }
    else{
      for(let nv of graph[L]){
        if(ch[nv]===0){
          path.push(nv);
          ch[nv]=1;
          DFS(nv);
          path.pop();
          ch[nv]=0;
        }
      }
    }
  }
  ch[1]=1;
  path.push(1);
  DFS(1);

  console.log(answer2);
  return answer;
}

console.log(solution(5,[[1,2],[1,3],[1,4],[2,1],[2,3],[2,5],[3,4],[4,2],[4,5]]));