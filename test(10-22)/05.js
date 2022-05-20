function solution(rc, operations) {
  var answer = [[]];

  const xlen = rc.length;
  const ylen = rc[0].length;

  const shiftRow = () => {
    let temp = [];
    let swaptemp = [];

    temp = rc[1];
    rc[1] = rc[0];

    for (let i = 1; i < xlen - 1; i++) {
      swaptemp = temp;
      temp = rc[i + 1];
      rc[i + 1] = swaptemp;
    }

    rc[0] = temp;
  };

  const rotate = () => {
    const tempArr = [[]];

    for (let i = 0; i < xlen; i++) {
      tempArr[i] = [...rc[i]];
    }

    let row = 0;

    for (let i = row; i < ylen - 1; i++) {
      tempArr[0][i + 1] = rc[0][i];
    }

    for (let i = row; i < xlen - 1; i++) {
      tempArr[i + 1][ylen - 1] = rc[i][ylen - 1];
    }

    for (let i = ylen - 1; i >= 1; i--) {
      tempArr[xlen - 1][i - 1] = rc[xlen - 1][i];
    }

    for (let i = xlen - 1; i >= 1; i--) {
      tempArr[i - 1][0] = rc[i][0];
    }

    return tempArr;
  };

  for (let operation of operations) {
    if (operation === "Rotate") {
      rc = rotate();
    } else {
      shiftRow();
    }
  }

  answer = rc;

  return answer;
}

console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    ["Rotate", "ShiftRow"]
  )
);
