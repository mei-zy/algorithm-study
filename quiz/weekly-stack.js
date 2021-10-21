function solution(s) {
  let stack = [];
  // 문자열 붙이는 변수
  let answer="";
  for (let i = 0; i < s.length; i++) {
    let repeatCount = "";
    let tmp = "";
    if (stack.length != 0 && s[i] === ")") {
      while (stack[stack.length - 1] !== "(") {
        // 왼쪽 괄호가 나올 때까지 빼준다.
        tmp+=stack.pop();
      }
      // console.log('tmp',tmp);
      stack.pop();
      // 왼쪽 괄호 빼준다.
      while (!isNaN(stack[stack.length - 1])){
        repeatCount+=stack.pop();
      }
      repeatCount=parseInt(repeatCount.split('').reverse().join(''));
      stack.push(tmp.repeat(repeatCount));
      // console.log(stack);
      continue;
    }
    stack.push(s[i]);
  }

  // stack length가 없어질 때까지 while문을 돈다.
  while(stack.length!==0){
    answer+=stack.pop();
  }
  return answer.split('').reverse().join('');
}

console.log(solution("3(a)2(bc)"));
