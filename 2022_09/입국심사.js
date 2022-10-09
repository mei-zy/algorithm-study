function solution(n, times) {
  var answer = 0;
  times.sort((a, b) => a - b);

  let left = 0,
    right = n * times[times.length - 1];

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let people = 0;

    for (let time of times) {
      people += parseInt(mid / time);
    }

    if (people >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
      answer=left
    }
  }
  
  return answer;
}