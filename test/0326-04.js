function solution(arr, brr) {
  let answer = 0;

  let flag = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    const need = brr[i] - arr[i];
    let cnt = 0;

    const DFS = (i, make) => {
      if (!make) {
        return;
      }

      if (i === arr.length) {
        return;
      }
      const possibleMake = arr[i] - 1;
      // console.log("arr", arr[i], arr[i] - (arr[i] - 1));
      // console.log(i + 1, need, possibleMake);
      if (possibleMake < need) {
        DFS(i + 1, need - possibleMake);
        cnt++;
        arr[i] -= possibleMake;
      } else {
        arr[i] -= need;
        DFS(i + 1, 0);
        cnt++;
      }
    };

    DFS(i + 1, need, 0);
    arr[i] += need;
    answer += cnt;
  }
  return answer;
}

console.log(solution([3, 7, 2, 4], [4, 5, 5, 2]));
