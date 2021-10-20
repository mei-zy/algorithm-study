let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input[0].split(" ")[0]);
let m = Number(input[0].split(" ")[1]);

let hash=new Set();
for(let i=0;i<n;i++){
  let word = input[i + 1].trim();
  hash.add(word);
}

let answer=0;
// 중복된 이름
let duplicate=[];
for(let j=n;j<m+n;j++){
  let name=input[j+1].trim();
  if(hash.has(name)){
    answer++;
    duplicate.push(name);
  }
}
duplicate.sort();
console.log(answer);
console.log(duplicate.join('\n'));