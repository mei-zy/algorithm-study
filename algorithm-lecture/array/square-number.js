function solution(arr){
  let left=0;
  let right=arr.length-1;
  let square=new Array();

  for(let i=arr.length-1;i>=0;i--){
    if(Math.abs(arr[left])>Math.abs(arr[right])){
      // left 의 절댓값이 더 큰경우
      square[i]=arr[left]*arr[left];
      left++;
    }
    else{
      square[i]=arr[right]*arr[right];
      right--;
    }
  }

  return square;
}

console.log(solution([-4,-1,0,3,10]));
