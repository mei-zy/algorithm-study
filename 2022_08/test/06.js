const isConsecutiveNum = (threeDigitPw) => {
  let consecutiveCount = 0;

  threeDigitPw
    .split("")
    .map(Number)
    .sort((a, b) => a - b)
    .reduce((arr, curr) => {
      if (arr === curr) consecutiveCount++;

      return arr + 1;
    }, +threeDigitPw[0]);

  return consecutiveCount === 3 ? true : false;
};

const isSameNum = (fourDigitPw) => {
  const firstNum = +fourDigitPw[0];

  const filterResult = fourDigitPw.split("").filter((num) => firstNum === +num);

  return filterResult.length === 4 ? true : false;
};

const solution = (password) => {
  if (isSameNum(password)) return "false";

  for (let i = 0; i < 2; i++) {
    const sliceNum = password.slice(i, i + 3);
    // console.log("result : ", isConsecutiveNum(sliceNum));
    if (isConsecutiveNum(sliceNum)) return "false";
  }

  return "true";
};

console.log(solution("1234")); // false
console.log(solution("0000")); // false
console.log(solution("8901")); //true
console.log(solution("1421")); //true
