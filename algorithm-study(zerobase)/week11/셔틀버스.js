function isSmaller(bustime, time) {
  let [busH, busM] = bustime.split(':').map(Number);
  let [tmpH, tmpM] = time.split(':').map(Number);
  // console.log(typeof tmpH, tmpM);

  if (busH > tmpH) return true;
  else if (busH < tmpH) return false;
  else {
    if (tmpM === busM || busM > tmpM) return true;
    return false;
  }
}

function solution(n, t, m, timetable) {
  var answer = '';

  const busTime = new Map();
  const startHour = 9;
  for (let i = 0; i < n; i++) {
    let tmpHour = startHour;
    let tmpMin = i * t;

    if (tmpMin >= 60) {
      tmpHour += parseInt(tmpMin / 60);
      tmpMin -= parseInt(tmpMin / 60) * 60;
    }

    busTime.set(`${tmpHour}:${tmpMin}`, []);
  }
  timetable.sort();
  let crewtable = new Array(n);

  for (let crew of timetable) {
    for (let [bustime, maxM] of busTime) {
      // console.log(bustime);
      if (maxM.length >= m) continue;
      if (isSmaller(bustime, crew)) {
        busTime.get(bustime).push(crew);
        break;
      }
    }
  }

  // console.log(busTime);
  const temp = [...busTime];
  let tmph, tmpm;
  if (temp[temp.length - 1][1].length === m) {
    // 꽉찬 경우
    let tmparr = temp[temp.length - 1][1];
    [tmph, tmpm] = tmparr[tmparr.length - 1].split(':').map(Number);
    if (tmpm === 0) {
      tmph--;
      tmpm = 59;
    } else tmpm--;
  } else {
    [tmph, tmpm] = temp[temp.length - 1][0].split(':').map(Number);
  }

  if (tmph < 10) tmph = '0' + tmph;
  else tmph += '';

  if (tmpm < 10) tmpm = '0' + tmpm;
  else tmpm += '';

  answer = tmph + ':' + tmpm;
  return answer;
}

console.log(solution(1, 1, 5, ['08:00', '08:01', '08:02', '08:03']));
console.log(solution(1, 1, 1, ['23:59']));
console.log(
  solution(10, 60, 45, [
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
    '23:59',
  ])
);
console.log(solution(2, 10, 2, ['09:10', '09:09', '08:00']));
console.log(solution(2, 1, 2, ['09:00', '09:00', '09:00', '09:00']));
