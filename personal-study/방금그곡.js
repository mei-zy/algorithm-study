function playingTime(start, end) {
  let [startHour, startMin] = start.split(':').map(Number);
  let [endHour, endMin] = end.split(':').map(Number);
  // console.log(startHour, startMin, endHour, endMin);

  if (endMin < startMin) {
    endHour--;
    return (endHour - startHour) * 60 + (startMin + 60 - endMin);
  } else if (endMin === startMin) {
    if (endHour > startHour) return (endHour - startHour) * 60;
    return 0;
  } else {
    return (endHour - startHour) * 60 + (endMin - startMin);
  }
}
function solution(m, musicinfos) {
  var answer = '(None)';

  let MaxplayingTime = 0;

  for (let info of musicinfos) {
    const [start, end, musicName, song] = info.split(',');

    const repeatNum = playingTime(start, end);

    let tmpSong = [...song].join('');
    // console.log(repeatNum, song.length);
    song.length <= repeatNum
      ? (tmpSong += song.repeat(parseInt(repeatNum / song.length)) + song.slice(0, parseInt(repeatNum % song.length)))
      : (tmpSong = song.slice(0, repeatNum));

    // console.log(tmpSong);

    if (tmpSong.indexOf(m) < 0) continue;

    if (tmpSong.includes(m)) {
      if (tmpSong[tmpSong.indexOf(m) + m.length] === '#') continue;

      if (MaxplayingTime === repeatNum) continue;
      MaxplayingTime = Math.max(MaxplayingTime, repeatNum);
      MaxplayingTime === repeatNum ? (answer = musicName) : false;
    }
  }

  return answer;
}

console.log(solution('ABCDEFG', ['12:00,12:18,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF']));
console.log(solution('CC#BCC#BCC#BCC#B', ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B']));
console.log(solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF']));
