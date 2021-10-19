// 최대부분증가수열
function solution(nums){
  dp=new Array(nums);
  dp[0]=1;
  for(let i=1;i<nums.length;i++){
    let max=0;
    for(let j=i-1;j>=0;j--){
      if(nums[i]>nums[j] && dp[j]>max) max=dp[j];
    }
    dp[i]=max+1;
  }
  console.log(dp);
}

console.log(solution([5,3,7,8,6,2,9,4]));