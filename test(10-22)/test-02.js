

function solution(nums, k) {
  var answer = 0;
  let left=0;
  
  
  let cnt=0;
  let len=Number.MIN_SAFE_INTEGER;
  for(let right=0;right<nums.length;right++){
    if(nums[right]===0) cnt++;
    while(cnt>k){
      if(nums[left]===0) cnt--;
      len=Math.max(len,right-left);
      // 그 전까지 max 값이니까
      // console.log(len);
      left++;
      // console.log('right',right,'left',left);
    }
  }
  answer=len;
  return answer;
}

console.log(solution([1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1], 2));