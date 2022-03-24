const getcombination = (arr, selectNum) => {
  const result = [];

  if (selectNum === 1) return arr.map((element) => [element]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combination = getcombination(rest, selectNum - 1);
    const attached = combination.map((element) => [fixed, ...element]);

    result.push(...attached);
  });

  return result;
};

function solution(orders, course) {
  const answer = [];

  let obj = new Map();

  for (let i = 0; i < orders.length; i++) {
    const order = orders[i].split("");
    for (let j = 0; j < course.length; j++) {
      //   // course에 담긴 length 만큼만 회전한다.
      const combination = getcombination(order, course[j]);
      combination
        .map((element) => element.sort().join(""))
        .forEach((element) => obj.set(element, (obj.get(element) || 0) + 1));
    }
  }

  for (let i = 0; i < course.length; i++) {
    const courseList = [];
    let max = 0;
    for (let [key, value] of obj) {
      if (key.length === course[i] && value >= 2) {
        courseList[key] = value;
        max = Math.max(max, value);
      }
    }

    for (let [key, value] of Object.entries(courseList)) {
      if (value === max) answer.push(key);
    }
  }

  return answer.sort();
}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
