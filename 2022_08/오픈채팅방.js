function solution(records) {
  var answer = [];

  const userMap = new Map();

  for (let record of records) {
    const [order, id, nickname] = record.split(" ");

    if (order === "Leave") continue;
    if (
      !userMap.get(id) ||
      order === "Change" ||
      userMap.get(id) !== nickname
    ) {
      userMap.set(id, nickname);
    }
  }

  for (let record of records) {
    const [order, id] = record.split(" ");
    const nickname = userMap.get(id);
    if (order === "Enter") {
      answer.push(`${nickname}님이 들어왔습니다.`);
    } else if (order === "Leave") {
      answer.push(`${nickname}님이 나갔습니다.`);
    }
  }
  return answer;
}
