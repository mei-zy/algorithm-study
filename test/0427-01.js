// 문자열이 주어지면 해당 문자열의 문자들을 가지고 만들 수 있는 최대길이 팰린드롬을 만들고 그 길이를 구하세요. 문자열은 소문자로만 이루어져 있습니다.
// 만약 “abcbbbccaa" 가 주어진다면 만들 수 있는 가장 긴 팰린드롬은 ”bbcaaacbb"이고 답은 9입니다.

// ▣ 입력설명
// 매개변수 s에 N(1<=N<=1,000)길이의 수열이 주어집니다.

// ▣ 출력설명
// 최대길이 팰린드롬의 길이를 반환합니다.

// ▣ 매개변수 형식 1
// “abcbbbccaa"

// ▣ 반환값 형식 1
// 9

// ▣ 매개변수 형식 2
// abcde

// ▣ 반환값 형식 2
// 1

// ▣ 매개변수 형식 3
// ccc

// ▣ 반환값 형식 3
// 3

function solution(s) {
  let answer = 0;
  let str = "";

  const map = new Map();

  s.split("").forEach((element) => {
    map.set(element, (map.get(element) || 0) + 1);
  });

  while (map.size) {
    let number = 0;

    for (let [key, value] of map) {
      if (value >= 2) {
        const half = parseInt(str.length / 2);
        const left = str.slice(0, half);
        const right = str.slice(half, str.length);

        str = left + key + key + right;

        answer += 2;
      } else {
        number++;
        continue;
      }

      map.set(key, map.get(key) - 2);
      if (map.get(key) === 0) map.delete(key);
    }
    if (number === map.size) {
      break;
    }
  }

  if (map.size) {
    answer++;
  }

  if (answer === 0) answer = 1;
  return answer;
}

console.log(solution("abcbbbccaa"));
console.log(solution("abcde"));

console.log(solution("ccc"));
