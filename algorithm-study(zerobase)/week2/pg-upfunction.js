function solution(progresses, speeds) {
  var answer = [];
  let len=progresses.length;
    // len : 총 해야하는 progress 의 갯수
  let stack=[];
  for(let i=len-1 ;i>=0;i--){
    stack.push(Math.ceil((100-progresses[i])/speeds[i]));
  }
  while(stack.length){
    let top=stack.pop();

    let cnt=1;
    while(stack[stack.length-1]<=top){
      stack.pop();
      cnt++
    }
    answer.push(cnt);
  }
  return answer;
}
console.log(solution([93,30,55],[1,30,5]));
console.log(solution([95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1]));