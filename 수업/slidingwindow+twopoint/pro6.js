function solution(num){

  let left=0;
  let sum=0;
  let count=0;

  let array=new Array(parseInt(num/2)+1).fill(0).map((v,i)=> i+1);

  for(let right=0;right<array.length;right++){
    sum+=array[right];

    while(sum>num){
      sum-=array[left];
      left++;
    }
    if(sum==num)
      count++;
  

  }
  return count;

}

console.log(solution(15));