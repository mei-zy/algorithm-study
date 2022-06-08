// const inputs = require("fs")
//   .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const [n, m, h] = inputs.shift().split(" ").map(Number);

// const board = Array.from(Array(h), () => Array.from(Array(m), () => []));
// const location = [];

// let height = 0;
// while (inputs.length) {
//   for (let i = 0; i < 3; i++) {
//     board[height][i] = inputs.shift().split(" ").map(Number);
//   }
//   height++;
// }

// for(let )

var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// var input = fs.readFileSync(__dirname + '/stdin.txt').toString().replace(/\r/g, "").trim().split('\n');
var info = input[0].split(" ");
var m = info[0] / 1;
var n = info[1] / 1;
var h = info[2] / 1;
var tomatoRack = [];
var temp = [];
var tomatoes = [];
for (var i = 1; i < input.length; i++) {
  tomatoes = input[i].split(" ").map((element) => element / 1);
  temp.push(tomatoes);
  if (temp.length === n) {
    tomatoRack.push(temp);
    temp = [];
  }
}

// linkedlist 큐를 만들어 주기 위한 Node 클래스와 LinkedList 클래스
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      let node = new Node(data);
      this.tail.next = node;
      this.tail = node;
      this.size++;
    }
  }

  shift() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.size--;
      return this.head.data;
    } else {
      this.head = this.head.next;
      this.size--;
      return this.head.data;
    }
  }

  getSize() {
    return this.size;
  }
}
// linkedlist 클래스 끝

// 익은 토마토, 안익은 토마토, 빈칸을 알아내기 위한 함수
function findTomatoes() {
  var ripeOnes = [];
  var unRipeCount = 0;
  var emptyCount = 0;
  for (var i = 0; i < tomatoRack.length; i++) {
    var tmts = tomatoRack[i];
    for (var j = 0; j < tmts.length; j++) {
      var tmt = tmts[j];
      for (var k = 0; k < tmt.length; k++) {
        if (tmt[k] === 1) {
          // 익은 토마토라면 배열에 저장
          ripeOnes.push({
            h: i, // 몇 층
            n: j, // 몇 행
            m: k, // 몇 열
            count: 0, // 익은 날의 수
          });
        } else if (tmt[k] === 0) {
          // 안익은 토마토라면 갯수 세어주기
          unRipeCount++;
        } else if (tmt[k] === -1) {
          // 빈칸이라면 갯수 세어주기
          emptyCount++;
        }
      }
    }
  }
  return { ripes: ripeOnes, unRipes: unRipeCount, empty: emptyCount };
}

var varietyTomatoes = findTomatoes();
var ripes = varietyTomatoes.ripes; // 익은 토마토 배열
var empties = varietyTomatoes.empty; // 안익은 토마토 갯수
var unRipes = varietyTomatoes.unRipes; // 빈칸 갯수

// 앞, 뒤, 좌, 우, 위, 아래로 탐색하기 위한 배열
var dn = [0, 0, 1, -1, 0, 0]; // 앞, 뒤
var dm = [0, 0, 0, 0, 1, -1]; // 좌, 우
var dh = [1, -1, 0, 0, 0, 0]; // 위, 아래

var nextM = 0;
var nextN = 0;
var nextH = 0;
var countDays = 0;

var full = m * n * h;

if (ripes.length === full - empties) {
  // 만약 토마토가 (빈칸 빼고) 모두 다 익었으면
  console.log(0);
} else if (
  empties === full ||
  ripes.length === 0 ||
  unRipes === full ||
  unRipes === full - empties
) {
  // 만약 토마토가 다 비었거나 || 익은게 없거나 || 다 안익은 것들로 꽉차있거나 || (빈칸 빼고) 다 안익은 것들이면
  console.log(-1);
} else {
  // 그게 아니면

  var q = new LinkedList(); // 링크드리스트 큐 생성
  for (var i = 0; i < ripes.length; i++) {
    q.push(ripes[i]); // 큐 안에 익은 토마토들을 넣음
  }

  while (q.getSize() !== 0) {
    // 큐가 빌때까지 bfs 반복
    var current = q.shift();

    for (var idx = 0; idx < 6; idx++) {
      nextH = dh[idx] + current.h;
      nextN = dn[idx] + current.n;
      nextM = dm[idx] + current.m;
      if (
        nextM >= 0 &&
        nextM < m &&
        nextN >= 0 &&
        nextN < n &&
        nextH >= 0 &&
        nextH < h
      ) {
        if (
          tomatoRack[nextH][nextN][nextM] === 1 ||
          tomatoRack[nextH][nextN][nextM] === -1
        )
          continue;
        if (tomatoRack[nextH][nextN][nextM] === 0) {
          tomatoRack[nextH][nextN][nextM] = 1;
          unRipes--;
          countDays = current.count + 1;
          q.push({
            h: nextH,
            n: nextN,
            m: nextM,
            count: countDays,
          });
        }
      }
    }
  }
  if (unRipes === 0) {
    // 안익은 토마토가 없으면
    console.log(current.count);
  } else {
    // 안익은 토마토가 있으면
    console.log(-1);
  }
}
