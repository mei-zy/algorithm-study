function solution(sizes) {
  var answer = 0;

  let wMax = Number.MIN_SAFE_INTEGER;
  let hMax = Number.MIN_SAFE_INTEGER;

  for (let [w, h] of sizes) {
    wMax = Math.max(wMax, w, h);
  }

  for (let [w, h] of sizes) {
    if (w > h) {
      hMax = Math.max(hMax, h);
    } else {
      hMax = Math.max(hMax, w);
    }
  }

  answer = wMax * hMax;
  return answer;
}
