function solution(progresses, speeds) {
  var answer = [0];
  // 1. 몇일 걸리는지 체크
  let days=[];
  for(let i=0;i<progresses.length;i++){
    days[i]=(100-progresses[i])/speeds[i];
    if(!Number.isInteger(days[i])) days[i]=parseInt(days[i])+1;
    // float 타입이면 integer형으로 변경후 +1 일
  }
  // 2. 스택에 넣으면서 체크
  let stack=[];
  for(let i=0, j=0;i<days.length;i++){
    if(days[j]>=days[i])
      answer[j]+=1;
    else{
      answer[++j]+=1;
      console.log(j)
    }
  }
  return answer;
}
console.log(solution([93,30,55],[1,30,5]));
console.log(solution([95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1]));