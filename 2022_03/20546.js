let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const initMoney = +input[0];
const day = input[1].split(" ").map(Number);

const junhyun = () => {
  let j_money = initMoney;
  let have_money = 0;

  for (let i = 0; i < day.length; i++) {
    const buy = parseInt(j_money / day[i]);

    have_money += buy;
    j_money -= buy * day[i];
  }

  return j_money + have_money * day[day.length - 1];
};

const sungmin = () => {
  let s_money = initMoney;
  let have_money = 0;

  for (let i = 2; i < day.length - 1; i++) {
    const oneday = day[i - 2];
    const twoday = day[i - 1];
    const today = day[i];

    if (oneday < twoday && twoday < today) {
      // 증가하는 경우 -> 하락 전량 매도
      s_money += day[i + 1] * have_money;
      have_money = 0;
    }
    if (oneday > twoday && twoday > today) {
      // 하락하는 경우 -> 전량 매수
      if (day[i + 1] < s_money) {
        have_money += parseInt(s_money / day[i + 1]);
        s_money -= have_money * day[i + 1];
      }
    }
  }

  return s_money + have_money * day[day.length - 1];
};
const j = junhyun();
const s = sungmin();

if (j > s) {
  console.log("BNP");
} else if (s > j) {
  console.log("TIMING");
} else {
  console.log("SAMESAME");
}
