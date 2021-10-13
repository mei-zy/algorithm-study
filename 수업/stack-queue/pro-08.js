function solution(s,m){
  let queue=new Array(21).fill(0);
  for(let i=0;i<21;i++){
    queue[i]=new Array();
  }
  // 2차원 배열 생성

  let answer=0;
  for(let i=0; i<s.length; i++){
    let len=s[i].length;
    while(queue[len].length>0 && (i-queue[len][0])>m){
        // answer+=parseInt(queue[len].length/2);
        queue[len].shift();
    }
    answer+=queue[len].length;
    queue[len].push(i);
  }
  return answer;
}

console.log(solution(["back","seen","big","good","size"],2));
console.log(solution(["back","seen","good","size"],2));