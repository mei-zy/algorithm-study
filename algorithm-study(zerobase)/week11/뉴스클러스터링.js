// 프로그래머스 LV2. 뉴스 클러스터링
function solution(str1, str2) {
  var answer = 0;

  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  function stringSet(string) {
    let str = [];
    for (let i = 0; i < string.length - 1; i++) {
      if (
        string.charCodeAt(i) >= 65 &&
        string.charCodeAt(i) <= 90 &&
        string.charCodeAt(i + 1) >= 65 &&
        string.charCodeAt(i + 1) <= 90
      )
        str.push(string[i] + string[i + 1]);
    }
    return str;
  }

  // 교집합 합집합 찾아주기
  const tmpstr1 = stringSet(str1);
  const tmpstr2 = stringSet(str2);
  // console.log(tmpstr1, tmpstr2);

  let common = 0;
  for (let i = 0; i < tmpstr1.length; i++) {
    for (let j = 0; j < tmpstr2.length; j++) {
      if (tmpstr1[i] === tmpstr2[j]) {
        common++;
        delete tmpstr2[j];
        break;
      }
    }
  }
  // console.log(common);
  let union = tmpstr1.length + tmpstr2.length - common;

  if (union === 0) return 65536;
  else {
    answer = parseInt((common / union) * 65536);
    return answer;
  }
}

console.log(solution("E=M*C^2", "e=m*c^2"));
console.log(solution("shake hands", "handshake"));
console.log(solution("FRANCE", "french"));
