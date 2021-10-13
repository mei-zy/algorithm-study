function solution(arr,m){
  arr.sort();
  let array=new Array(arr[arr.length-1]+1).fill(0);
  let MAX=Number.MIN_SAFE_INTEGER;
  let MIN=Number.MAX_SAFE_INTEGER;

  for(let x of arr){
    array[x]+=1;
    if(MAX<x) MAX=x;
    if(MIN>x) MIN=x;
  }
  // console.log(array);
  for(let i=0;i<m;i++){
    if(array[MAX]===1){
      array[MAX]=0;
      MAX-=1;
      array[MAX]+=1;
    }
    else if(array[MAX]!==1){
      // Max값 변경x
      array[MAX]-=1;
      array[MAX-1]+=1;
    }
    if(array[MIN]===1){
      array[MIN]=0;
      MIN+=1;
      array[MIN]+=1;
    }
    else if(array[MIN]!==1){
      // MIN값 변경x
      array[MIN]-=1;
      array[MIN+1]+=1;
    }

  }
  // console.log(array);
  // console.log(MAX+"  "+MIN);
  return MAX-MIN;

}

console.log(solution([2,1,3,7,5],2));