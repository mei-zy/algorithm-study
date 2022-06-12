const calPayRating = (join, payment) => {
  const joinMonth = parseInt(join / 12);

  if (joinMonth >= 2 && joinMonth < 5) {
    if (payment >= 900000) {
      return true;
    } else return false;
  } else if (joinMonth >= 5) {
    if (payment >= 900000) return true;
    else if (payment >= 600000) return true;
    else return false;
  }
};

function solution(periods, payments, estimates) {
  var answer = new Array(2).fill(0);

  let n = periods.length;
  let index = 0;

  while (index < n) {
    let currentVip = false;
    let nextVip = false;
    let sum = 0;

    for (let payment of payments[index]) {
      sum += payment;
    }

    // 이번달 먼저 체크
    if (periods[index] >= 24) {
      currentVip = calPayRating(periods[index], sum);
    }

    // 다음달 체크
    if (periods[index] + 1 >= 24) {
      // console.log(periods[index])
      sum -= payments[index][0];
      nextVip = calPayRating(periods[index] + 1, sum + estimates[index]);
    }

    if (currentVip === false && nextVip === true) {
      answer[0]++;
    }
    if (currentVip === true && nextVip === false) {
      answer[1]++;
    }

    index++;
  }

  return answer;
}
