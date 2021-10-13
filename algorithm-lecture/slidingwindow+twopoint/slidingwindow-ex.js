function solution(arr,k){
  let left=0;
  // 1. 초기화
  let sum=0;
  let MAX=Number.MIN_SAFE_INTEGER;
  for(let i=0;i<k-1;i++){
    sum+=arr[i];
  }
  for(let right=k-1;right<arr.length;right++){
    // console.log("right : "+ arr[right]);
    sum+=arr[right];
    // console.log(sum);

    MAX=Math.max(MAX,sum);
    sum-=arr[left];
    left++;
  }
  return MAX;
}

console.log(solution([12,15,11,20,25,10,20,19,13,15],3));