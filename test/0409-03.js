function solution(tstring, variables) {
  let answer = [];

  let temp = new Map();

  const checkVariableLoop = () => {
    variables.forEach(([key, value]) => temp.set(key, value));

    for (let [key, value] of temp) {
      const tmpValue = value.replace(/[{}]/g, "");

      if (temp.has(tmpValue)) {
        const get = temp.get(tmpValue).replace(/[{}]/g, "");

        if (get === key) return false;
        temp.set(key, temp.get(tmpValue));
      }
    }
    return true;
  };

  const result = checkVariableLoop();
  if (!result) return tstring;

  const string = tstring.split(" ");

  for (let i = 0; i < string.length; i++) {
    const start = string[i][0];
    const end = string[i][string[i].length - 1];
    const mid = string[i].replace(/[{}]/g, "");

    if (start === "{" && end === "}") {
      if (temp.has(mid)) answer.push(temp.get(mid));
    } else answer.push(string[i]);
  }
  return answer.join(" ");
}
