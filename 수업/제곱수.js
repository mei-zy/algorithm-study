function solution(s){
  let n=s.length;
  let lt=0, rt=n-1;
  let tmp;
  let answer=Array(s.length).fill(0);

  for(let i=n-1;i>0;i--){
    if(Math.abs(s[lt])>Math.abs(s[rt])){
      tmp=s[lt];
      lt++;
    }
    else{
      tmp=s[rt];
      rt--;
    }
    answer[i]=tmp*tmp;
  }
  return answer;

}

let array=[-4,1,0,3,10];
console.log(solution(array));