


function solution(id_list, report, k){
  let mapH=new Map();
  for(let i=0;i<id_list.length;i++) mapH.set(id_list[i],i);

  // 1. 신고 체크하기
  let board=Array.from(Array(id_list.length),()=>Array(id_list.length).fill(0));
  for(let i=0;i<report.length;i++){
    let tmp=report[i].split(' ');
    // 0 - 신고자 1 - 신고 당한 사람
    let reporter=mapH.get(tmp[0]);
    let reported=mapH.get(tmp[1]);
    board[reporter][reported]=1;
  }

  // 2. 정지 당한 사람 체크
  let report_mem=[];
  for(let i=0;i<id_list.length;i++){
    let cnt=0;
    for(let j=0;j<id_list.length;j++){
      if(board[j][i]===1) cnt++;
      if(cnt>=2){
        report_mem.push(i);
        break;
      }
    }
  }

  // 3. 메일온 갯수 세기
  let answer=[];
  for(let i=0;i<id_list.length;i++){
    let cnt_mail=0;
    for(let j=0;j<id_list.length;j++){
      if(board[i][j]===1 && report_mem.includes(j)) cnt_mail++;
    }
    answer.push(cnt_mail);
  }
  return answer;
}
console.log(solution(["muzi","frodo","apeach","neo"],
["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],2));

console.log(solution(["con","ryan"],["ryan con","ryan con","ryan con","ryan con"]));


// <--------------------------->
// 1번
function solution(id_list, report, k) {
  let person = id_list.length;
  let result = new Array(person).fill(0);
  let arr = new Array(person);
  let hash_name = new Map();
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(person).fill(0);
  }
  for (let i = 0; i < id_list.length; i++) {
    hash_name.set(id_list[i], i);
  }
  for (let i = 0; i < report.length; i++) {
    let from = hash_name.get(report[i].split(" ")[0]);
    let to = hash_name.get(report[i].split(" ")[1]);
    arr[from][to] = 1;
  }
  let pause = [];
  for (let i = 0; i < id_list.length; i++) {
    let cnt = 0;
    for (let j = 0; j < id_list.length; j++) {
      if (arr[j][i] === 1) cnt++;
    }
    if (cnt >= k) {
      pause.push(i);
    }
  }
  for (let i = 0; i < id_list.length; i++) {
    for (let j = 0; j < pause.length; j++) {
      if (arr[i][pause[j]] === 1) {
        result[i]++;
      }
    }
  }
  return result;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
); // [2,1,1,0]

set.add
set.has
set.delete
