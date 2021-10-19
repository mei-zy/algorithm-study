function solution(nums, n){
  let answer=0;
  let left=1,right=Math.max(...nums);

  function Count_hour(mid){
    let total_hour=0;
    // 전체 먹는데 몇시간 걸리는지
    for(let i=0;i<nums.length;i++){
      total_hour+=Math.ceil(nums[i]/mid);
    }
    return total_hour;
  }
  while(left<=right){
    mid=parseInt((left+right)/2);
    if(Count_hour(mid)>n){
      left=mid+1;
    }
    else{
      answer=mid;
      right=mid-1;
    }
  }
  return answer;
}

console.log(solution([29,12,24,5,19],6));