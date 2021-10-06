// filter Example

function solution(num){
  // v 가 콜백함수 -> 하나하나의 원소들
  // v,i 하면 i 가 index가 된다. 

  // filter((v,i))
  let answer=num.filter((v)=>{
    // 소수가 소수면 return
    // 참을 return 혹은 거짓이다.
    if(v === 1)
      return false;
    for(let i = 2; i <= parseInt(Math.sqrt(v)); i++){
      if (v % i === 0)
        return false; 
      }
   return true;
  });
  
  // == 은 type까지 비교한다. 
  return answer;
}

let array=[1,2,3,4,5,6];
console.log(solution(array));