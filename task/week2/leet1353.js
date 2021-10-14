class minHeap {
  constructor() {
    this.heap = [];
    this.heap[0] = Number.MIN_SAFE_INTEGER;
  }
  // <---1. 데이터삽입 함수 --->
  insert(value) {
    this.heap.push(value);
    this.upHeap(this.heap.length - 1);
  }
  upHeap(pos) {
    // pos는 insert된 위치이다.(heap)
    let tmp = this.heap[pos];
    while (tmp < this.heap[parseInt(pos / 2)]) {
      // tmp(입력된 값)이 올라갈 수 있을만큼(parents) 올라간다.
      this.heap[pos] = this.heap[parseInt(pos / 2)];
      pos = parseInt(pos / 2);
    }
    this.heap[pos] = tmp;
    // 마지막으로 멈춘 곳에 tmp값 삽입
  }
  // <---1. 데이터제거 함수 --->
  get() {
    // 1) 노드가 한 개 남았을 때
    if (this.heap.length === 2) return this.heap.pop();
    // 2) 노드가 한 개 이상 남았을 때
    else {
      let res = this.heap[1];
      this.heap[1] = this.heap.pop();
      this.downHeap(1, this.heap.length - 1);
      return res;
    }
  }
  downHeap(pos, len){
    let tmp=this.heap[pos];
    while(tmp>=this.heap[parseInt(pos*2)]){
      let child=pos*2;
      if(child<len && this.heap[child] > this.heap[child+1]) child++;
      if(tmp<=this.heap[child]) break;
      this.heap[pos]=this.heap[child];
      pos=child;
    }
    this.heap[pos]=tmp;
  }
  size(){
    return this.heap.length-1;
  }
}

// <---여기서부터 코드--->
function solution(events) {
  events.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  console.log(events);
  const startDay = events[0][0];
  const endDay = [...events].sort((a, b) => b[1] - a[1])[0][1];
  console.log(endDay);

  const heap = new minHeap();
  let i = 0,
    count = 0;
  for (let day = startDay; day <= endDay; day++) {
    for (; i < events.length; i++) {
      if (events[i][0] > day) break;
      if (events[i][0] === day) heap.insert(events[i][1]);
    }
    if (heap.size() <= 0) continue;
    let earliest = heap.get();
    while (earliest < day) earliest = heap.get();
    if (earliest >= day) count++;
  }
  return count;
}

console.log(solution([[1,2],[1,2],[3,3],[1,5],[1,5]]));

console.log(solution([[1,4],[4,4],[2,2],[3,4],[1,1]])); //4
console.log(solution([[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]])); //7
console.log(solution([[1,2],[2,3],[3,4],[1,2]])); //4
console.log(solution([[1,2],[2,3],[3,4]])); //3
console.log(solution([[1,2],[1,2],[1,6],[1,2],[1,2]])); //3
console.log("-------------------------");
console.log(solution([[1,10],[2,2],[2,2],[2,2],[2,2]]));//2