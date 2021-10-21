let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");
// <--- 입력 예제 --->
// 20
// <----------------->

input=Number(input[0]);

// 소수 찾기
function prime(number) {
  let answer=[];
  for(let i=2;i<=number;i++){
    let isPrime=true;
    for(let j=2; j*j<=i;j++){
      if(i%j === 0 ){
        // 나누어 떨어지는 경우
        isPrime=false;
        break;
      }
    }
    if(isPrime) answer.push(i);
  }
  return answer;
}

let primeNum=prime(input);
let left=0;
let sum=0;
let cnt=0;
for(let right=0;right<primeNum.length;right++){
  sum+=primeNum[right];
  while(sum>input){
    sum-=primeNum[left++];
  }
  if(sum===input) cnt++;
}
console.log(cnt);

