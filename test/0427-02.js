// 문자열이 주어지면 해당 문자열의 문자들을 가지고 만들 수 있는 팰린드롬의 개수를 구하세요. 문자열은 소문자로만 이루어져 있습니다.
// 만약 “aabb" 가 주어진다면 만들 수 있는 만들 수 있는 팰린드롬은 ”abba", "baab"를 만들 수 있으면 답은 2입니다.

// ▣ 입력설명
// 매개변수 s에 N(1<=N<=16)길이의 수열이 주어집니다.

// ▣ 출력설명
// 만들 수 있는 팰린드롬의 개수를 반환합니다.

// ▣ 매개변수 형식 1
// “aabb"

// ▣ 반환값 형식 1
// 2

// ▣ 매개변수 형식 2
// abcde

// ▣ 반환값 형식 2
// 0

function solution(s) {
  var answer = 0;

  const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      // fixed 를 제외한 모든 부분을 붙여준다.
      const permutations = getPermutations(rest, selectNumber - 1);
      const attached = permutations.map((el) => [fixed, ...el]);

      results.push(...attached);
    });

    return results;
  };

  function isPalindrom(str) {
    return str == str.split("").reverse().join("");
  }

  const splitStr = s.split("");
  const result = getPermutations(splitStr, s.length);

  const set = new Set();
  for (let i = 0; i < result.length; i++) {
    const tmpStr = result[i].join("");
    // console.log(tmpStr);

    if (set.has(tmpStr)) continue;
    if (isPalindrom(tmpStr)) answer++;

    set.add(tmpStr);
  }

  return answer;
}

function solution2(s) {
  var answer = 0;

  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }

  let count = 0;
  let other = 0;

  for (let [key, value] of map) {
    if (value % 2 === 0) {
      other++;
    } else count++;
  }

  const permutation = (number) => {
    let result = 1;
    for (let i = number; i >= 1; i--) {
      result = result * i;
    }
    return result;
  };
  if (count >= 2) {
    return 0;
  } else {
    answer = permutation(other);
  }
  return answer;
}

console.log(solution("aabb"));
console.log(solution2("aabb"));
