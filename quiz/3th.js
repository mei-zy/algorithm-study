function solution(arr,K){
  function counting(k){
    let left=0,
        odd=0;
        sum=0;
    for(let right=0;right<arr.length;right++){
      if(arr[right]%2 === 1) odd++;
      while(odd>k){
        if(arr[left]%2 === 1) odd--;
        left++;
      }
      sum+=right-left+1;
    }
    return sum;
  }
  return counting(K)-counting(K-1);
}
console.log(solution([1,2,1,1,2],2));