function solution(str,m){
  let left=sum=answer=0;

  for(let right=0;right<str.length;right++){
    sum+=str[right];

    while(sum>m){
      sum-=str[left];
      left++;
    }
    answer+=right-left+1;
  }
  return answer;

}

console.log(solution([1,3,1,2,3],5));
console.log(solution([1,1,1,1,1,1],3));