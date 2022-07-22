function isPrime(num) {
  if(num<=1) return false;
  if(num === 2) {
    return true;
  }
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
      return false; 
    }
  }
  return true; 
}
function solution(n,k){
  let answer=0;
  let arr=String(n.toString(k)).split('0');

  for(let x of arr){
    // 00 으로 splited 되는 경우가 있어서 "" 값 들어오는 경우가 존재한다
    if(isNaN(parseInt(x))) continue;
    if(isPrime(parseInt(x))) answer++;
  }
  return answer; 
}
console.log(solution(437674, 3));
console.log(solution(110011,10));
console.log(solution(100000210002300021,10));


// <------------------------------>
// 2번
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function solution(n, k) {
  let ans = 0;
  let num = n.toString(k);
  // console.log(num);
  let arr = num.split("0").map(Number);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) ans++;
  }
  return ans;
}

// console.log(solution(437674, 3)); // 3
console.log(solution(110011, 10)); // 2