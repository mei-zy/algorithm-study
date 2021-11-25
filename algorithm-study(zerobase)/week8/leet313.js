function superuglynum(n, primes) {
  let prime = new Map();
  let arr = new Array(n + 1);

  // primes 초기화
  for (let x of primes) prime.set(x, 1);
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let [key, value] of prime) {
      if (min > arr[value] * key) min = arr[value] * key;
    }
    for (let [key, value] of prime) {
      if (min === arr[value] * key) prime.set(key, value + 1);
    }
    arr[i] = min;
  }
  return arr[n];
}
console.log(superuglynum(12, [2, 7, 13, 19]));
