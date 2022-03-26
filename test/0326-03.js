function solution(num_teams, remote_tasks, office_tasks, employees) {
  let answer = [];

  const office_numTeam = Array(num_teams + 1).fill(false);
  const remoteNum = new Set();

  const getOffice = () => {
    for (let i = 0; i < employees.length; i++) {
      const [number, ...job] = employees[i].split(" ");
      const teamNum = +number;
      let flag = false;

      for (let j = 0; j < job.length; j++) {
        if (office_tasks.includes(job[j])) {
          office_numTeam[teamNum] = true;
          flag = true;
          break;
        }
      }

      if (!flag) remoteNum.add(i + 1);
    }
  };

  const notOfficeTeam = () => {
    for (let i = 0; i < office_numTeam.length; i++) {
      if (!office_numTeam[i]) {
        for (let j = 0; j < employees.length; j++) {
          const [number, ...job] = employees[j].split(" ");
          const teamNum = +number;

          if (i === teamNum) {
            remoteNum.delete(j + 1);
            break;
          }
        }
      }
    }
  };

  getOffice();
  notOfficeTeam();
  answer = [...remoteNum];

  return answer;
}

console.log(
  solution(
    3,
    ["development", "marketing", "hometask"],
    ["recruitment", "education", "officetask"],
    [
      "1 development hometask",
      "1 recruitment marketing",
      "2 hometask",
      "2 development marketing hometask",
      "3 marketing",
      "3 officetask",
      "3 development",
    ]
  )
);
