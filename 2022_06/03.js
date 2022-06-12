const checkDuplicatedSevices = (services, wanted) => {
  const set = new Set();

  for (let service of services) set.add(service);
  for (let service of wanted) set.add(service);

  if (set.size !== services.length) return false;

  return true;
};

function solution(n, plans, clients) {
  var answer = new Array(clients.length).fill(0);

  const plansLen = plans.length;
  let clientCount = 0;

  for (let i = 0; i < plansLen; i++) {
    let [data, ...services] = plans[i].split(" ").map(Number);

    if (i) [...services] = [...services, ...plans[i - 1][1]].sort();

    plans[i] = [data, [...services]];
  }

  while (clients.length) {
    const [wantedData, ...wantedServices] = clients
      .shift()
      .split(" ")
      .map(Number);

    let i = 1;

    for (let [data, services] of plans) {
      if (data < wantedData) {
        i++;
        continue;
      }

      if (checkDuplicatedSevices(services, [...wantedServices])) {
        answer[clientCount] = i;
        break;
      }

      i++;
    }

    clientCount++;
  }

  return answer;
}

console.log(
  solution(
    4,
    ["100 1 3", "500 4", "2000 5"],
    ["300 3 5", "1500 1", "100 1 3", "50 1 2"]
  )
);

// console.log(
//   solution(5, ["38 2 3", "394 1 4"], ["10 2 3", "300 1 2 3 4", "400 1"])
// );
