// 침몰하는 타이타닉

function solution(n,m){
  n.sort((a,b)=>a-b);
  // 1. sort해준다.
  let left=0,
      right=n.length-1;
  let answer=0;
  while(left<right){
    if(n[left]+n[right]<=m){
      answer++;
      left++
      right--;
    }
    else{
      answer++
      right--;
    }
  }
  return answer;
}
console.log(solution([90,50,70,100,60],140));