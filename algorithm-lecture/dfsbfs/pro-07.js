function solution(arr, n){
  let answer=[],
      tmp=[];
  let ch=new Array(arr.length).fill(0);

  function DFS(L){
    if(L===n) answer.push(tmp.slice());
    else{
      for(let i=0;i<arr.length;i++){
        if(ch[i]===0){
          ch[i]=1;
          tmp.push(arr[i]);
          DFS(L+1);
          ch[i]=0;
          tmp.pop();
        }
      }
    }
  }
  DFS(0);
  return answer;
}
console.log(solution([3,6,9],2));