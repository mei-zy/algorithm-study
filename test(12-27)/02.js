function isPalin(s) {
  let left = 0;
  let right = s.length - 1;

  // 틀렸을 때 left를 움직이는 경우
  let leftcount = 0;
  while (left <= right) {
    if (s[left] !== s[right]) {
      left++;
      leftcount++;
      continue;
    }
    left++;
    right--;
  }
  let rightcount = 0;
  if (leftcount === 0) return 0;
  else if (leftcount === 1) return 1;
  else {
    let left = 0;
    let right = s.length - 1;
    while (left <= right) {
      if (s[left] !== s[right]) {
        right--;
        rightcount++;
        continue;
      }
      left++;
      right--;
    }
  }
  if (rightcount === 0) return 0;
  else if (rightcount === 1) return 1;
  else return 2;
}

function solution(s) {
  var answer = [];
  for (let x of s) answer.push(isPalin(x));
  // console.log(isPalin(s));
  return answer;
}

console.log(
  solution([
    "abba",
    "summuus",
    "xabba",
    "xabbay",
    "comcom",
    "comwwmoc",
    "comwwtmoc",
  ])
);
