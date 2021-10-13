// 선긋기 문제
function solution(n){
  n.sort((a,b)=>a[0]-b[0]);
  // 0번째 배열로 정렬

  let start=n[0][0];
  let   end=n[0][1];
  let answer=0;

  for(let i=1;i<n.length;i++){
    if(end>=n[i][0] && end<n[i][1]) end=n[i][1];
    else if(end<n[i][0]){
      answer+=(end-start);
      start=n[i][0];
      end=n[i][1];
    }
  }
  answer+=(end-start);
  return answer;
}
console.log(solution([[2,5],[1,3],[7,10]]));