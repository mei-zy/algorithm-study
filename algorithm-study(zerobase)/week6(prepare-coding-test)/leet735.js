function solution(arr) {
  let stack = [];
  
  for (let i = 0; i < arr.length; i++) {
      let flag = false;
      if (arr[i] < 0 && stack[stack.length-1] > 0) {
          while (stack.length !== 0 && stack[stack.length-1] > 0) {
              if (Math.abs(arr[i]) === Math.abs(stack[stack.length-1])) {
                // 절댓값이 같으면 모두 빼준다.
                  stack.pop();
                  flag = false;
              } else if (Math.abs(arr[i]) > Math.abs(stack[stack.length-1])) {
                  // 절댓값이 현재가 더 크다면 빼준다
                  stack.pop();
              } else {
                // 절댓값이 내부가 더 크다면 for문을 나온다
                  flag = false;
              }  
              if (flag) break;
          }
      }
      if (!flag) stack.push(arr[i])
  }
  return stack;
};