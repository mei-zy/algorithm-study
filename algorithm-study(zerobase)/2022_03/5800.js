const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const arr = inputs[1].split(" ").map(Number);
const word = inputs[2];
const map = new Map("");

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    map.set("space", (map.get("space") || 0) + 1);
  } else if (arr[i] <= 26) {
    // 대문자
    const large = String.fromCharCode(arr[i] + 64);
    map.set(large, (map.get(large) || 0) + 1);
  } else {
    // 소문자
    const small = String.fromCharCode(arr[i] + 70);
    map.set(small, (map.get(small) || 0) + 1);
  }
}
const check = () => {
  for (let j = 0; j < word.length; j++) {
    if (word[j] === " ") {
      if (map.has("space")) {
        if (map.get("space") === 0) return "n";
        map.set("space", map.get("space") - 1);
      } else return "n";
    } else {
      if (map.has(word[j])) {
        if (map.get(word[j]) === 0) return "n";
        else {
          map.set(word[j], map.get(word[j]) - 1);
        }
      } else return "n";
    }

    return "y";
  }
};

const answer = check();
console.log(answer);
