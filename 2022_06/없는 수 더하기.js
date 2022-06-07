function solution(numbers) {
  var answer = 0;

  numbers.sort((a, b) => a - b);

  for (let i = 0; i <= 9; i++) {
    if (numbers[0] === i) {
      numbers.shift();
      continue;
    }
    answer += i;
  }
  return answer;
}
