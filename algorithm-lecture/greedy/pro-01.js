// 동전교환 문제
function solution(n,m){
  let change=m,
      count=0;

  while(true){
    change=(m-n.pop());
    count++;
    if(change===0) break;
  }
  return count;
}
console.log(solution([1,5,10],15));