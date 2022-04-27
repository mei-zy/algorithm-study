// 엘리트정보원은 보안실에 극비문서를 보관하고 있습니다.
// 직원들은 보안키를 사용해서 보안실에 들어갈 수 있습니다. 엘리트정보원은 보안을 위해서 한 사람이 한 시간동안 3번 이상 보안실에 들어가기 위해 보안키를 사용하면 경고음이 울립니다.
// 보안키를 사용한 사람이름과 사용시간이 주어지면 경고음이 울린 사람의 이름을 구하세요.
// 11:21부터 12:21까지는 한 시간 안으로 생각합니다.

// ▣ 입력설명
// 매개변수 names에 사람이름이 주어집니다. 매개변수 times에 보안키가 사용된 시간이 주어집니다. 시간은 HH:MM형식으로 주어지만 시간은 00:00부터 24:00까지로 표현됩니다.
// names[i]가 times[i]시간에 보안키를 사용했다라고 해석하면 됩니다.
// names, times의 길이는 100,000이하입니다.
// 모든 사람의 이름은 서로 구분이 됩니다.

// ▣ 출력설명
// 경고음이 울린 사람이름을 알파벳 사전순으로 리스트에 담아 반환하면 됩니다.

// ▣ 매개변수 형식 1
// ["yaniel","yaniel","yaniel","luis","luis","luis","luis"],
// ["10:21","10:40","11:21","09:00","09:12","10:09","10:12"]

// ▣ 반환값 형식 1
// ["luis", "yaniel"]

// ▣ 매개변수 형식 2
// ["alice","alice","alice","bob","bob","bob","bob"],
// ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"]

// ▣ 반환값 형식 2
// ["bob"]

function solution(names, times) {
  var answer = [];
  const map = new Map();

  for (let i = 0; i < names.length; i++) {
    if (map.has(names[i])) {
      const temp = map.get(names[i]);
      map.set(names[i], [...temp, times[i]]);
    } else {
      map.set(names[i], [times[i]]);
    }
  }

  const entries = [...map.entries()];
  const sortingMap = new Map();
  for (let i = 0; i < entries.length; i++) {
    sortingMap.set(entries[i][0], entries[i][1].sort());
  }

  const state = new Map();

  const check = (hour, min, tempHour, tempMin) => {
    if (tempHour - hour === 0) {
      return false;
    } else {
      if (tempHour - hour === 1 && tempMin <= min) {
        return false;
      }
    }
    return true;
  };

  for (let [name, time] of sortingMap) {
    for (let i = 0; i < time.length; i++) {
      let count = 1;
      const [hour, min] = time[i].split(":").map(Number);

      for (let j = i + 1; j < time.length; j++) {
        const [temphour, tempmin] = time[j].split(":").map(Number);

        if (!check(hour, min, temphour, tempmin)) {
          count++;
        }
      }
      if (count >= 3) {
        answer.push(name);
        break;
      }
    }
  }
  return answer.sort();
}

console.log(
  solution(
    ["yaniel", "yaniel", "yaniel", "luis", "luis", "luis", "luis"],
    ["10:21", "10:40", "11:21", "09:00", "09:12", "10:09", "10:12"]
  )
);

console.log(
  solution(
    ["alice", "alice", "alice", "bob", "bob", "bob", "bob"],
    ["12:01", "12:00", "18:00", "21:00", "21:20", "21:30", "23:00"]
  )
);
