function solution(nums, m){
  let answer=0, sum=0;
  let nH=new Map();
  for(let i=0; i<nums.length; i++){
      sum+=nums[i];
      if(sum===m) answer++;
      if(nH.has(sum-m)) answer+=nH.get(sum-m);
      nH.set(sum, nH.get(sum)+1 || 1);
      console.log(i);
      console.log(nH);
  }
  return answer;
}

// console.log(solution([1,2,3,-3,1,2],3));
console.log(solution([-1,0,1],0));
// console.log(solution([-1,-1,-1,1],0));