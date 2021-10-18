function solution(x){
  let num=[];
  let answer=[];

  // 1. x를 배열에 넣고, 정렬
  let temp=x;
  while(temp>0){
    let t=temp%10;
    num.push(t);
    temp=parseInt(temp/10);
  }
  num.sort((a,b)=>a-b);

  // DFS에 필요한 변수 선언

  let tmp=[];
  let len=num.length;
  let ch=new Array(len).fill(0);

  function DFS(L){
    if(L===len){
      let q=parseInt(tmp.join(''))
      if(q>x) answer.push(q);
    }
    else{
      for(let i=0;i<len;i++){
        if(ch[i]===0){
          ch[i]=1;
          tmp.push(num[i]);
          DFS(L+1);
          ch[i]=0;
          tmp.pop();
        }
      }
    }
  }
  DFS(0);
  if(answer.length>0){
    answer.sort((a,b)=>a-b);
    return answer[0];
  }
  else return -1;

}

// console.log(solution(123));
console.log(solution(102368));
// console.log(solution(20573));