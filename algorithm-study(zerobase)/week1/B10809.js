const fs = require('fs');
const { stringify } = require('querystring');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

console.log(solution(input[0]));

function solution(str) {
  let map=new Map();
  let answer=new Array();
  let now;

  // 입력받은 str 한글자마다 map에 넣는다.
  for (let i = 0; i < str.length; i++) {
    // 한글자씩 쪼개기
    now = str.substring(i, i + 1);
    if(map.has(now)) continue;
    map.set(now, i);
  }

  // 만약 map에 저장되있다면 그 수를 push
  // 없다면 -1을 push
  for(let j=97;j<=122;j++){
    if(map.has(String.fromCharCode(j)))
      answer.push(map.get(String.fromCharCode(j)))
    else answer.push(-1);
  }

  // join(" ")로 배열을 문자화 시킨다.
  return answer.join(" ");
}