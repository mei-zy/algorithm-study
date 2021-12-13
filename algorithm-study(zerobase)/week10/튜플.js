const G = require('glob');

function solution(s) {
  var answer = [];
  let tmp = [];
  tmp = s
    .replace(/^\{|\}$/g, '')
    .split('},{')
    .map(item => item.replace(/\{|\}/g, ''))
    .sort((a, b) => a.length - b.length);

  for (let i = 0; i < tmp.length; i++) {
    tmp[i] = tmp[i].split(',');
    for (let j = 0; j < tmp[i].length; j++) {
      if (answer.includes(parseInt(tmp[i][j]))) continue;
      answer.push(parseInt(tmp[i][j]));
    }
  }
  // .filter(item => (answer.includes(item) ? false : (answer[answer.length] = item)))
  // .map(Number);
  return answer;
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}'));
console.log(solution('{{20,111},{111}}'));
