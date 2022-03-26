function solution(logs) {
  let answer = 0;

  let msg = [];
  const logIndex = {
    0: "team_name",
    2: "application_name",
    4: "error_level",
    6: "message",
  };

  const checkLogs = (log) => {
    const reg_notWord = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
    const reg_number = /[0-9]/g;

    for (let [key, value] of Object.entries(logIndex)) {
      const logkey = +key;

      if (log[logkey] !== value) {
        return false;
      }
      if (reg_notWord.test(log[logkey + 1])) {
        return false;
      }
      if (reg_number.test(log[logkey + 1])) return false;
    }
    return true;
  };

  for (let i = 0; i < logs.length; i++) {
    if (logs[i].length > 100) {
      // 메시지길이 100 넘어가는 것
      answer++;
      continue;
    }
    msg[i] = logs[i].replace(/ :/g, "").split(" ");

    const result = checkLogs(msg[i]);
    if (!result) answer++;
  }
  return answer;
}

// console.log(
//   solution([
//     "team_name : db application_name : dbtest error_level : info message : test",
//     "team_name : test application_name : I DONT CARE error_level : error message : x",
//     "team_name : ThisIsJustForTest application_name : TestAndTestAndTestAndTest error_level : test message : IAlwaysTestingAndIWillTestForever",
//     "team_name : oberervability application_name : LogViewer error_level : error",
//   ])
// );

console.log(
  solution([
    "team_name : MyTeam application_name : YourApp error_level : info messag : IndexOutOfRange",
    "no such file or directory",
    "team_name : recommend application_name : recommend error_level : info message : RecommendSucces11",
    "team_name : recommend application_name : recommend error_level : info message : Success!",
    "   team_name : db application_name : dbtest error_level : info message : test",
    "team_name     : db application_name : dbtest error_level : info message : test",
    "team_name : TeamTest application_name : TestApplication error_level : info message : ThereIsNoError",
  ])
);

const x = ["ru2w32!@"];

var special_pattern = /[0-9]/gi;

console.log(special_pattern.test(x));
