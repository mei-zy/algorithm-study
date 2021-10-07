function solution(arr,k){
  let start=0,end=0;
  let max=0;
  let windowsum=0;

  while(end<arr.length){
    console.log("start:,"+start+"end : ,"+end+",max : "+max+", sum:"+windowsum);
    windowsum+=arr[end];

    if(end>=(k-1)){
      max=Math.max(windowsum,max);
      windowsum-=arr[start];
      start++;
    }
    end++;
  }
  console.log(max);
}

let array=[2,4,7,10,8,4];
console.log(solution([2,4,7,10,8,4],3));