function solution(str,k){
  let left=0;
  let answer=0;
  let sum=0;

  for(let right=0;right<str.length;right++){
    sum+=str[right];

    while(sum>k){
      sum-=str[left++];
    }
    if(sum===k)
      answer++;
  }
  return answer;
}

console.log(solution([1,2,1,3,1,1,1,2],6));