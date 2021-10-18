function solution(n, edges){
  let answer=0;
  let graph=new Array(n+1);
  for(i=0;i<=n;i++) graph[i]=new Array();
  let ch=new Array(n+1).fill(0);
  for(let [v,e] of edges){
    graph[v].push(e);
    graph[e].push(v);
  }

  function DFS(L){
    for(let v of graph[L]){
      if(ch[v]===0){
        ch[v]=1;
        DFS(v);
      }
    }
  }

  for(let i=1;i<=n;i++){
    if(ch[i]===0){
      answer++;
      ch[i]=1;
      DFS(i);
    }
  }
  return answer;

}


console.log(solution(7,[[1,2],[2,3],[1,4],[1,5]]));